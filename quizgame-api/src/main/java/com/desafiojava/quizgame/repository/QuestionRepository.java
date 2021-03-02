package com.desafiojava.quizgame.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.desafiojava.quizgame.entities.Question;

@Repository
public interface QuestionRepository extends JpaRepository<Question,Integer>{
	
	@Query("SELECT DISTINCT q FROM  Question q JOIN FETCH q.options ")	
	List<Question> findQuestiosWithOptions();
	

}
