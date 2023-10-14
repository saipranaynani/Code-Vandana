import java.util.HashSet;
import java.util.Scanner;
import java.util.Set;

public class Pangram {
    public static boolean isPangram(String sentence) {
        sentence = sentence.toLowerCase(); 
        Set<Character> alphabetSet = new HashSet<>();

        for (char c = 'a'; c <= 'z'; c++) {
            alphabetSet.add(c);
        }

        for (char c : sentence.toCharArray()) {
            if (Character.isLetter(c)) {
                alphabetSet.remove(c);
            }
        }

        return alphabetSet.isEmpty();
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String inputSentence = scanner.nextLine();

        if (isPangram(inputSentence)) {
            System.out.println("The input is a pangram.");
        } else {
            System.out.println("The input is not a pangram.");
        }

        scanner.close();
    }
}
