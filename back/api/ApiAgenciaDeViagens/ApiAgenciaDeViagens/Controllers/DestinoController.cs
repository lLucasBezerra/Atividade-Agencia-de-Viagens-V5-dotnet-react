using ApiAgenciaDeViagens.Dto;
using ApiAgenciaDeViagens.Interfaces;
using ApiAgenciaDeViagens.Models;
using ApiAgenciaDeViagens.Repositories;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;

namespace ApiAgenciaDeViagens.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DestinoController : Controller
    {
        private readonly IDestinoRepository _destinoRepository;

        private readonly IMapper _mapper;
        public DestinoController(IDestinoRepository destinoRepository, IMapper mapper)
        {
            _destinoRepository = destinoRepository;
            _mapper = mapper;
        }

        [HttpGet]
        [ProducesResponseType(200, Type = typeof(IEnumerable<Destino>))]
        public IActionResult GetDestinos()
        {
            //maneira mais clean? porém um pouco mais trabalhosa
            var destinos = _mapper.Map<List<DestinoDto>>(_destinoRepository.GetDestinos());


            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            return Ok(destinos);
        }

        [HttpGet("{id}")]
        [ProducesResponseType(200, Type = typeof(Destino))]
        [ProducesResponseType(400)]
        public IActionResult GetDestino(int id)
        {
            var destino = _mapper.Map<DestinoDto>(_destinoRepository.GetDestino(id));

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            return Ok(destino);
        }

        [HttpPost]
        [ProducesResponseType(204)]
        [ProducesResponseType(400)]
        public IActionResult CreateDestino([FromBody] DestinoDto destinoCreate)
        {
            // tudo isso para previnir e/ou informar erros
            if(destinoCreate == null)
                return BadRequest(ModelState);

            var destino = _destinoRepository.GetDestinos()
                        .Where(d => d.Cidade.Trim().ToUpper() == destinoCreate.Cidade.TrimEnd().ToUpper() && d.ObraR == destinoCreate.Cidade).FirstOrDefault();
            if(destino != null)
            {
                ModelState.AddModelError("", "destino ja existente");
                return StatusCode(422, ModelState);
            }

            if(!ModelState.IsValid)
                return BadRequest(ModelState);

            var destinoMap = _mapper.Map<Destino>(destinoCreate);
            
            if(!_destinoRepository.CreateDestino(destinoMap))
            {
                ModelState.AddModelError("", "Ocorreu algo de errado ao salvar");
                return StatusCode(500, ModelState);
            }

            return Ok("Criado com sucesso!");
            

        }

        [HttpPut("{destinoId}")]
        [ProducesResponseType(400)]
        [ProducesResponseType(204)]
        [ProducesResponseType(404)]
        public IActionResult Updatedestino(int destinoId, [FromBody]DestinoDto updatedDestino)
        {
            if(updatedDestino == null)
                return BadRequest(ModelState);

            if(destinoId != updatedDestino.Id)
                return BadRequest(ModelState);

            if(!_destinoRepository.DestinoExist(destinoId))
                return NotFound();

            if(!ModelState.IsValid)
                return BadRequest(ModelState);
            
            var destinoMap = _mapper.Map<Destino>(updatedDestino);

            if(!_destinoRepository.UpdateDestino(destinoMap))
            {
                ModelState.AddModelError("", "Algo de errado aconteceu ao tentar atualizar um destino");
                return StatusCode(500, ModelState);
            }

            return NoContent();
        }
    }
}
