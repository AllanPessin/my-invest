package br.com.AllanPessin.backend.domain;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class Investimento {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private String assetCode;
	private Double value;
	private Integer amount;
	private LocalDate buyedAt;
	
	@ManyToOne
	@JoinColumn(name = "fk_code_category")
	private Category category;
	
	public Long getId() {
		return id;
	}
	
	public void setId(Long id) {
		this.id = id;
	}
	
	public String getAssetCode() {
		return assetCode;
	}
	
	public void setAssetCode(String assetCode) {
		this.assetCode = assetCode;
	}
	public Double getValue() {
		return value;
	}
	
	public void setValue(Double value) {
		this.value = value;
	}
	
	public Integer getAmount() {
		return amount;
	}
	public void setAmount(Integer amount) {
		this.amount = amount;
	}
	
	public LocalDate getBuyedAt() {
		return buyedAt;
	}
	
	public void setBuyedAt(LocalDate buyedAt) {
		this.buyedAt = buyedAt;
	}
		
	public Category getCategory() {
		return category;
	}

	public void setCategory(Category category) {
		this.category = category;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((amount == null) ? 0 : amount.hashCode());
		result = prime * result + ((assetCode == null) ? 0 : assetCode.hashCode());
		result = prime * result + ((buyedAt == null) ? 0 : buyedAt.hashCode());
		result = prime * result + ((category == null) ? 0 : category.hashCode());
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		result = prime * result + ((value == null) ? 0 : value.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Investimento other = (Investimento) obj;
		if (amount == null) {
			if (other.amount != null)
				return false;
		} else if (!amount.equals(other.amount))
			return false;
		if (assetCode == null) {
			if (other.assetCode != null)
				return false;
		} else if (!assetCode.equals(other.assetCode))
			return false;
		if (buyedAt == null) {
			if (other.buyedAt != null)
				return false;
		} else if (!buyedAt.equals(other.buyedAt))
			return false;
		if (category == null) {
			if (other.category != null)
				return false;
		} else if (!category.equals(other.category))
			return false;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		if (value == null) {
			if (other.value != null)
				return false;
		} else if (!value.equals(other.value))
			return false;
		return true;
	}

		
}
