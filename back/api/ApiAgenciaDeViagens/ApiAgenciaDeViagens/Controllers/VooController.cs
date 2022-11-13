using ApiAgenciaDeViagens.dto;
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
    public class VooController : Controller
    {
        private readonly IVooRepository _vooRepository;
        private readonly IMapper _mapper;
        public VooController(IVooRepository vooRepository, IMapper mapper)
        {
            _vooRepository = vooRepository;
            _mapper = mapper;
        }

        [HttpGet]
        [ProducesResponseType(200, Type = typeof(IEnumerable<Voo>))]
        public IActionResult GetVoos()
        {
            //maneira mais clean? porém um pouco mais trabalhosa
            var voos = _mapper.Map<List<VooDto>>(_vooRepository.GetVoos());


            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            return Ok(voos);
        }

        [HttpGet("{id}")]
        [ProducesResponseType(200, Type = typeof(Voo))]
        [ProducesResponseType(400)]
        public IActionResult GetVoo(int id)
        {
            if (!_vooRepository.VooExists(id))
                return NotFound();
                
            var voo = _mapper.Map<VooDto>(_vooRepository.GetVoo(id));

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            return Ok(voo);
        }

        [HttpPost]
        [ProducesResponseType(204)]
        [ProducesResponseType(400)]
        public IActionResult CreateVoo([FromBody] VooDto vooCreate)
        {
            // tudo isso para previnir e/ou informar erros
            if(vooCreate == null)
                return BadRequest(ModelState);

            var voo = _vooRepository.GetVoos()
                        .Where(v => v.CompanhiaA.Trim().ToUpper() == vooCreate.CompanhiaA.Trim().ToUpper()).FirstOrDefault();
            if(voo != null)
            {
                ModelState.AddModelError("", "voo ja existente");
                return StatusCode(422, ModelState);
            }

            if(!ModelState.IsValid)
                return BadRequest(ModelState);

            var vooMap = _mapper.Map<Voo>(vooCreate);
            
            if(!_vooRepository.CreateVoo(vooMap))
            {
                ModelState.AddModelError("", "Ocorreu algo de errado ao salvar");
                return StatusCode(500, ModelState);
            }

            return Ok("Criado com sucesso!");
            

        }
    }
}
