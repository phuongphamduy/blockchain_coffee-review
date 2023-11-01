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
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
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
@Table(name = "Accounts")
public class Account implements Serializable {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	Integer Id;
	String fullname;
	String email;
	String password;
	@Temporal(TemporalType.DATE)
	Date birthday;
	String phone;
	Boolean isblock = false;
	Boolean isadmin = false;
	String wallet;
	@JsonManagedReference(value = "post-account")
	@OneToMany(mappedBy = "account")
	List<Post> posts;
	@JsonManagedReference(value = "review-account")
	@OneToMany(mappedBy = "account")
	List<Review> reviews;
	@JsonIgnore
	@OneToMany(mappedBy = "account")
	List<Favorite> favorites;
	@JsonManagedReference(value = "interaction-account")
	@OneToMany(mappedBy = "account")
	List<Interaction> interactions;
	@JsonManagedReference(value = "account-follower")
	@OneToMany(mappedBy = "follower")
	List<Follow> followers;
	@JsonManagedReference(value = "account-following")
	@OneToMany(mappedBy = "following")
	List<Follow> followings;
}
