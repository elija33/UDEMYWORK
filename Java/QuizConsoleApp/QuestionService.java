package QuizConsoleApp;

import java.util.Scanner;

public class QuestionService {
    Question[] question = new Question[5];
    String selection[] = new String[5];

    public QuestionService(){
        question[0] = new Question(1, "what do we use", "Java", "Cpp", "Python", "C", "Rube");
        question[1] = new Question(2, "what is the size of int", "2", "5", "1", "6", "3");
        question[2] = new Question(2, "what is the size of double", "2", "5", "1", "6", "3");
        question[3] = new Question(2, "what is the size of char", "2", "5", "1", "6", "3");
        question[4] = new Question(2, "what is the size of long", "2", "5", "1", "6", "3");
    }

    public void playQuiz() {
        int i = 0;
        for(Question allquestion : question){
            System.out.println("Question no. : " + allquestion.getId());
            System.out.println(allquestion.getQuestion());
            System.out.println(allquestion.getOpt1());
            System.out.println(allquestion.getOpt2());
            System.out.println(allquestion.getOpt3());
            System.out.println(allquestion.getOpt4());
            Scanner sc = new Scanner(System.in);
            selection[i] = sc.nextLine();
            i++;
        }
        for(String game : selection){
            System.out.println(game);
        }
    }

    public void printScore() {
        int score = 0;
        for(int i = 0; i<question.length; i++){
            Question newgame = question[i];
            String actualAnswer = newgame.getAnswer();
            String userAnString = selection[i];

            if(actualAnswer.equals(userAnString)){
                System.out.println("you are right");
                score++;
            }
        }
            System.out.println("You score is : " + score);
    }
}
