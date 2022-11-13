using ApiAgenciaDeViagens.Dto;
using ApiAgenciaDeViagens.Interfaces;
using ApiAgenciaDeViagens.Models;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Routing;

namespace ApiAgenciaDeViagens.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PromocaoController : Controller
    {
        private readonly IPromocaoRepository _promocaoRepository;
        private readonly IMapper _mapper;

        public PromocaoController(IPromocaoRepository promocaoRepository, IMapper mapper)
        {
            _promocaoRepository = promocaoRepository;
            _mapper = mapper;
        }
        
        [HttpGet]
        [ProducesResponseType(200, Type = typeof(IEnumerable<Promocao>))]
        public IActionResult GetPromocoes()
        {
            var promocao = _mapper.Map<List<PromocaoDto>>(_promocaoRepository.GetPromocoes());

            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            return Ok(promocao);
        }

        [HttpGet("{id}")]
        [ProducesResponseType(200, Type = typeof(Promocao))]
        [ProducesResponseType(400)]
        public IActionResult GetPromocao(int id)
        {
            if(!_promocaoRepository.PromocaoExist(id))
            return NotFound();

            var promocao = _mapper.Map<PromocaoDto>(_promocaoRepository.GetPromocao(id));

            return Ok(promocao);
        }

        [HttpGet("destino/{promoId}")]
        [ProducesResponseType(200, Type = typeof(IEnumerable<Destino>))]
        [ProducesResponseType(400)]
        public IActionResult GetDestinosByPromocaoId(int promoId)
        {
            var destino = _mapper.Map<List<DestinoDto>>(_promocaoRepository.GetDestinosByPromocao(promoId));

            if(!ModelState.IsValid)
            return BadRequest();

            return Ok(destino);
        }

        [HttpPost]
        [ProducesResponseType(204)]
        [ProducesResponseType(400)]
        public IActionResult CreatePromocao([FromBody]PromocaoDto promocaoCreate)
        {
            // tudo isso para previnir e/ou informar erros
            if(promocaoCreate == null)
                return BadRequest(ModelState);

            var promocao =  _promocaoRepository.GetPromocoes()
                        .Where(p => p.NomePromo.Trim().ToUpper() == promocaoCreate.NomePromo.TrimEnd().ToUpper()).FirstOrDefault();
            if(promocao != null)
            {
                ModelState.AddModelError("", "promocao ja existente");
                return StatusCode(422, ModelState);
            }

            if(!ModelState.IsValid)
                return BadRequest(ModelState);

            var promocaoMap = _mapper.Map<Promocao>(promocaoCreate);
            
            if(!_promocaoRepository.CreatePromocao(promocaoMap))
            {
                ModelState.AddModelError("", "Ocorreu algo de errado ao salvar");
                return StatusCode(500, ModelState);
            }

            return Ok("Criado com sucesso!");
            

        }
        
        [HttpPut("{promocaoId}")]
        [ProducesResponseType(400)]
        [ProducesResponseType(204)]
        [ProducesResponseType(404)]
        public IActionResult UpdatePromocao(int promocaoId, [FromBody]PromocaoDto updatedPromocao)
        {
            if(updatedPromocao == null)
                return BadRequest(ModelState);

            if(promocaoId != updatedPromocao.Id)
                return BadRequest(ModelState);

            if(!_promocaoRepository.PromocaoExist(promocaoId))
                return NotFound();

            if(!ModelState.IsValid)
                return BadRequest(ModelState);
            
            var promocaoMap = _mapper.Map<Promocao>(updatedPromocao);

            if(!_promocaoRepository.UpdatePromocao(promocaoMap))
            {
                ModelState.AddModelError("", "Algo de errado aconteceu ao tentar atualizar uma promoção");
                return StatusCode(500, ModelState);
            }

            return NoContent();
        }
    }
}