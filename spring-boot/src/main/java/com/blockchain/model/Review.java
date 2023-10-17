package com.blockchain.model;

import java.io.Serializable;
import java.util.Date;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "Reviews")
public class Review implements Serializable {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY) 
	Integer Id;
	String comment;
	Boolean islike;
	Date createdate = new Date();
	@ManyToOne
	@JoinColumn(name = "accountid")
	Account account;
	@JsonBackReference
	@ManyToOne
	@JoinColumn(name = "postid")
	Post post;
	@JsonManagedReference(value = "image")
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "imageid")
	Image image;
}
