package com.blockchain.model;

import java.io.Serializable;
import java.util.Date;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
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
	@Temporal(TemporalType.DATE)
	Date createdate = new Date();
	@JsonBackReference(value = "review-account")
	@ManyToOne
	@JoinColumn(name = "accountid")
	Account account;
	@JsonBackReference(value = "post-review")
	@ManyToOne
	@JoinColumn(name = "postid")
	Post post;
	@JsonManagedReference(value = "image")
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "imageid")
	Image image;
}
