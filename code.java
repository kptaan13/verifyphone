package verifyphone;
import java.util.Scanner;
public class code {
	public static void main(String[] args) {
		Scanner input = new Scanner(System.in);
		System.out.println("Enter number in (1234567892) format : ");
		String num = input.nextLine();
		if(valPhone(num)) {
		System.out.println("Valid");
		}
		else {
		System.out.println("Invalid");
		}
		}
		public static boolean valPhone(String num) {
		return  (num.length()==10 && num.matches("[0-9]+"))
		&& ((num.charAt(0)== '5'
		&& num.charAt(1)== '1' 
		&& num.charAt(2)== '4')
		|| (num.charAt(0)== '4'
		&& num.charAt(1)== '3'
		&& num.charAt(2)== '8'));
	}
}