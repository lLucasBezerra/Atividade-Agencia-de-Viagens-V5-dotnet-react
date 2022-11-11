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
        private readonly IPromocaoRepository _promocaoRespository;
        private readonly IMapper _mapper;

        public PromocaoController(IPromocaoRepository promocaoRepository, IMapper mapper)
        {
            _promocaoRespository = promocaoRepository;
            _mapper = mapper;
        }
        
        [HttpGet]
        [ProducesResponseType(200, Type = typeof(IEnumerable<Promocao>))]
        public IActionResult GetPromocoes()
        {
            var promocao = _mapper.Map<List<PromocaoDto>>(_promocaoRespository.GetPromocoes());

            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            return Ok(promocao);
        }

        [HttpGet("{id}")]
        [ProducesResponseType(200, Type = typeof(Promocao))]
        [ProducesResponseType(400)]
        public IActionResult GetPromocao(int id)
        {
            if(!_promocaoRespository.PromocaoExist(id))
            return NotFound();

            var promocao = _mapper.Map<PromocaoDto>(_promocaoRespository.GetPromocao(id));

            return Ok(promocao);
        }

        [HttpGet("destino/{promoId}")]
        [ProducesResponseType(200, Type = typeof(IEnumerable<Destino>))]
        [ProducesResponseType(400)]
        public IActionResult GetDestinosByPromocaoId(int promoId)
        {
            var destino = _mapper.Map<List<DestinoDto>>(_promocaoRespository.GetDestinosByPromocao(promoId));

            if(!ModelState.IsValid)
            return BadRequest();

            return Ok(destino);
        }
    }
}