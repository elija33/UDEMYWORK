package QuizConsoleApp;

public class MainWork {
    public static void main(String[] args) {
        QuestionService service = new QuestionService();
        service.playQuiz();
        service.printScore();
    }
}
