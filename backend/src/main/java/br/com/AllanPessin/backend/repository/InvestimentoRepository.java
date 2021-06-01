package br.com.AllanPessin.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.AllanPessin.backend.domain.Investimento;

public interface InvestimentoRepository extends JpaRepository<Investimento, Long>{

}
