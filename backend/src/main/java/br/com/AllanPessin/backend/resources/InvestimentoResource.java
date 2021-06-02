package br.com.AllanPessin.backend.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.AllanPessin.backend.domain.Investimento;
import br.com.AllanPessin.backend.repository.InvestimentoRepository;

@RestController
@RequestMapping("/investimentos")
@CrossOrigin(origins = "https://my-invest.vercel.app")
public class InvestimentoResource {

	@Autowired
	private InvestimentoRepository investimentoRepository; 
	
	@GetMapping
	public List<Investimento> listAll(){
		return investimentoRepository.findAll();
	}
	
	@GetMapping("/{id}")
	public Investimento findById(@PathVariable Long id){
		return investimentoRepository.findById(id).orElse(null);
	}
	
	@DeleteMapping("/{id}")
	public void delete(@PathVariable Long id) {
		investimentoRepository.deleteById(id);
	}
	
	@PostMapping
	public Investimento create(@RequestBody Investimento investimento) {
		return investimentoRepository.save(investimento);
	}
}
