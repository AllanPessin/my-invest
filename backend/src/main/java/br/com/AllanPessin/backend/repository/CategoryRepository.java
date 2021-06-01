package br.com.AllanPessin.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.AllanPessin.backend.domain.Category;

public interface CategoryRepository extends JpaRepository<Category, Long>{

}
