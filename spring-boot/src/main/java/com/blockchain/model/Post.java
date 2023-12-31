package com.blockchain.model;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
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
@Table(name = "Posts")
public class Post implements Serializable {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	Integer Id;
	String name;
	String address;
	String description;
	Double lat;
	Double lng;
	Boolean isconfirm = false;
	@Temporal(TemporalType.DATE)
	Date createdate = new Date();
	@JsonBackReference(value = "post-account")
	@ManyToOne
	@JoinColumn(name = "accountid")
	Account account;
	@JsonManagedReference(value = "post-review")
	@OneToMany(mappedBy = "post")
	List<Review> reviews;
	@JsonManagedReference(value = "favorite-post")
	@OneToMany(mappedBy = "post")
	List<Favorite> favorites;
	@JsonManagedReference(value = "image-post")
	@OneToMany(mappedBy = "post")
	List<Image> images;
	@JsonManagedReference(value = "interaction-post")
	@OneToMany(mappedBy = "post")
	List<Interaction> interactions;
	@JsonManagedReference(value = "pricepost-post")
	@OneToMany(mappedBy = "post")
	List<PricePost> priceposts;

}
