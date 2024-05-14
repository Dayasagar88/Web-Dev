class demo{
    int a = 10;  String b = "Daya";

    void show(){
        System.out.println(a+" "+b);
    }
}
public class OandC {

    public static void main(String[] args) {
        // demo obj = new demo();
        demo obj;
        obj = new demo();
        obj.show();
    }

}