package com.desafiojava.quizgame.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
public class Answer {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer idAnswer;

	@Column(nullable = false, length=512)
	private String content;

	@ManyToOne
	@JoinColumn(name = "question")
	@JsonBackReference
	private Question question;
	
	private AnswerStatus status;

	public AnswerStatus getStatus() {
		return status;
	}

	public void setStatus(AnswerStatus status) {
		this.status = status;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public Question getQuestion() {
		return question;
	}

	public void setQuestion(Question question) {
		this.question = question;
	}

	public Integer getIdAnswer() {
		return idAnswer;
	}

	public void setIdAnswer(Integer idAnswer) {
		this.idAnswer = idAnswer;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((content == null) ? 0 : content.hashCode());
		result = prime * result + ((idAnswer == null) ? 0 : idAnswer.hashCode());
		result = prime * result + ((question == null) ? 0 : question.hashCode());
		result = prime * result + ((status == null) ? 0 : status.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Answer other = (Answer) obj;
		if (content == null) {
			if (other.content != null)
				return false;
		} else if (!content.equals(other.content))
			return false;
		if (idAnswer == null) {
			if (other.idAnswer != null)
				return false;
		} else if (!idAnswer.equals(other.idAnswer))
			return false;
		if (question == null) {
			if (other.question != null)
				return false;
		} else if (!question.equals(other.question))
			return false;
		if (status != other.status)
			return false;
		return true;
	}

	
	

}