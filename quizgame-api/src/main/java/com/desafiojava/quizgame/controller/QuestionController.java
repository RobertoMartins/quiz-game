package com.desafiojava.quizgame.controller;

import java.util.Collections;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.desafiojava.quizgame.entities.Question;
import com.desafiojava.quizgame.repository.QuestionRepository;

@RestController
@RequestMapping("/questions")
public class QuestionController {
	@Autowired
	private QuestionRepository questionRepository;
	@CrossOrigin(origins = "*")
	@GetMapping
	public List<Question> findAll() {
		List<Question> questions = questionRepository.findQuestiosWithOptions();
		Collections.shuffle(questions);
		return questions;
	}
}