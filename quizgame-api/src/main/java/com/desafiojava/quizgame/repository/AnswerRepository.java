package com.desafiojava.quizgame.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.desafiojava.quizgame.entities.Answer;


@Repository
public interface AnswerRepository extends JpaRepository<Answer,Integer> {
	
	
}
