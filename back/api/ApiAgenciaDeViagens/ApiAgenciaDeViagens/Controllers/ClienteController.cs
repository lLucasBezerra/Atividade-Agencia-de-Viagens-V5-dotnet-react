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
            var cliente = _mapper.Map<ClienteDto>(_clienteRepository.GetCliente(id));

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            return Ok(cliente);
        }
    }
}
