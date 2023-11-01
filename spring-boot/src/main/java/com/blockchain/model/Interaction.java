package com.blockchain.model;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "Interactions")
public class Interaction implements Serializable {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	Integer id;
	Boolean islike;
	@JsonBackReference(value = "interaction-post")
	@ManyToOne
	@JoinColumn(name = "postid")
	Post post;
	@JsonBackReference(value = "interaction-account")
	@ManyToOne
	@JoinColumn(name = "accountid")
	Account account;
}
