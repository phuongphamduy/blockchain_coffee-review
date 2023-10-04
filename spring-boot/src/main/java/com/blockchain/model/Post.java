package com.blockchain.model;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "Posts")
public class Post implements Serializable {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	Integer Id;
	String name;
	String address;
	Double lat;
	Double lng;
	@ManyToOne
	@JoinColumn(name = "accountid")
	Account account;
	@OneToMany(mappedBy = "post")
	List<Review> reviews;
	@OneToMany(mappedBy = "post")
	List<Favorite> favorites;
	
}