package br.com.AllanPessin.backend.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.AllanPessin.backend.domain.Category;
import br.com.AllanPessin.backend.repository.CategoryRepository;

@RestController
@RequestMapping("/categorias")
public class CategoryResource {
	@Autowired
	private CategoryRepository categoryRepository; 
	
	@PostMapping
	public Category create(@RequestBody Category category) {
		return categoryRepository.save(category);
	}
	
	@DeleteMapping
	public void delete(@PathVariable Long id) {
		categoryRepository.deleteById(id);
	}
	
	@GetMapping
	public List<Category>listAll() {
		return categoryRepository.findAll();
	}
	
	@GetMapping("/{id}")
	public Category findById(@PathVariable Long id){
		return categoryRepository.findById(id).orElse(null);
	}
}
