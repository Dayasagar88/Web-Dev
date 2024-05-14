class PrivateC
{
    int a; double b; String c;
    private  PrivateC(){
        a = 10; b = 20.20;  c = "Private";
        System.out.println(a+" "+b+" "+c);
    }

    public static void main(String[] args) {
        PrivateC obj = new PrivateC();
    }
}




