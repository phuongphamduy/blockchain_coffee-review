package com.blockchain.model;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

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
	Boolean isblock;
	@JsonIgnore
	@OneToMany(mappedBy = "account")
	List<Post> posts;
	@OneToMany(mappedBy = "account")
	List<Review> reviews;
	@OneToMany(mappedBy = "account")
	List<Favorite> favorites;
}
