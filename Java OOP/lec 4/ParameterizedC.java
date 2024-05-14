class A
    {
        int x,y;
        A(int a , int b)//Parameterized constructor
        {
            x = a; y = b;
        }

        A(int a , String b)//Parameterized constructor
        {
            System.out.println(a+" "+b);
        }

        void show(){
            System.out.println(x+" "+y);
        }
    }   

public class ParameterizedC {

     
    public static void main(String[] args) {
        A ref = new A(100, 200);
        A ref2 = new A(0, null);   
        ref.show();     
    }
}
