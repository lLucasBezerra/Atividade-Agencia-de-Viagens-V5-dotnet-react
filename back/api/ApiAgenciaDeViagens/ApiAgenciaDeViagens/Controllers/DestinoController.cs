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
            var destinos = _mapper.Map<List<DestinoDto>>(_destinoRepository.GetDestinos);


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
    }
}
