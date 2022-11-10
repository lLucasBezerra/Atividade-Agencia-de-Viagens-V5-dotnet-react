using ApiAgenciaDeViagens.dto;
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
    public class ClienteController : Controller
    {
        private readonly IClienteRepository _clienteRepository;
        private readonly IMapper _mapper;
        public ClienteController(IClienteRepository clienteRepository, IMapper mapper)
        {
            _clienteRepository = clienteRepository;
            _mapper = mapper;
        }

        [HttpGet]
        [ProducesResponseType(200, Type = typeof(IEnumerable<Cliente>))]
        public IActionResult GetClientes()
        {
            //maneira mais clean? porém um pouco mais trabalhosa
            var clientes = _mapper.Map<List<ClienteDto>>(_clienteRepository.GetClientes());


            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            return Ok(clientes);
        }

        [HttpGet("{id}")]
        [ProducesResponseType(200, Type = typeof(Cliente))]
        [ProducesResponseType(400)]
        public IActionResult GetCliente(int id)
        {
            if (!_clienteRepository.ClienteExist(id))
                return NotFound();
            var cliente = _mapper.Map<ClienteDto>(_clienteRepository.GetCliente(id));

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            return Ok(cliente);
        }

        [HttpGet("destino/{cliId}")]
        [ProducesResponseType(200, Type = typeof(IEnumerable<Destino>))]
        [ProducesResponseType(400)]
        public IActionResult GetDestinosByClienteId(int cliId)
        {
            var destinos = _mapper.Map<List<DestinoDto>>(_clienteRepository.GetDestinosByCliente(cliId));

            if (!ModelState.IsValid)
                return BadRequest();

            return Ok(destinos);
        }

        [HttpGet("voo/{cliId}")]
        [ProducesResponseType(200, Type = typeof(IEnumerable<Voo>))]
        [ProducesResponseType(400)]
        public IActionResult GetVoosByClienteId(int cliId)
        {
            var voos = _mapper.Map<List<VooDto>>(_clienteRepository.GetVoosByCliente(cliId));

            if (!ModelState.IsValid)
                return BadRequest();

            return Ok(voos);
        }
    }
}
