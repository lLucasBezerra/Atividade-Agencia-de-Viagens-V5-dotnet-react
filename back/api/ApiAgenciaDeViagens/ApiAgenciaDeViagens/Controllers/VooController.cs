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
    }
}
