//This Keyword 

// /**
//  * main
//  */
// public class main {

//     int a;
//     main(){
//         this(10);
//         System.out.println("Default Constructor");
//     }
//     main(int a){
//         // this();
//         this.a = a;
//     }
//     void show(){
//         System.out.println(a);
//     }
//     public static void main(String[] args) {
//         main obj = new main(200);
//         obj = new main();
//         obj .show();
//     }
// }

////////////////////////////////////////////////////////////


// class shape
// {
//     void draw(){
//         System.out.println("Can't determine");
//     }
// }
// class square extends shape
// {
//     @Override
//     void draw(){
//         super.draw();   
//         System.out.println("Square shape");
//     }
// }
// /**
//  * main
//  */
// public class main {

//     public static void main(String[] args) {
//         shape obj = new square();
//         obj.draw();
//     }
// }


///////////////////////////////////////////////////////////////////////////
                                        //Extending Interaface
//  interface gill
//  {
//     void add();
//  }
//  interface raj extends gill
//  {
//     void sub();
//  }

//  class my implements raj
//  {
//     // @Override
//     public void add(){
//         System.out.println("Adding");
//     }
//     // @Override
//     public void sub(){
//         System.out.println("Subracting");
//     }
//  }
// /**
//  * main
//  */
// public class main {

//     public static void main(String[] args) {
//         my obj = new my();
//         obj.add(); obj.sub();
//     }
// }
                                                    //Exception Handling
/**
 * main
//  */
// public class main {

//     public static void main(String[] args) {

//         System.out.println("Main method started!");
//         int a = 10;
//         try{

//         System.out.println(a/2);
//             try{
//                 int arr[] = {1,2,3,4,5};
//                 System.out.println(arr[1]);
//                 throw new StackOverflowError();
//             }
//             catch(ArrayIndexOutOfBoundsException e){
//                 System.out.println("index not found!");
//             }

//         }

//         catch(Exception e){
//             System.out.println("Error"+a/00);
//         }
//         finally{
//             System.out.println("The End");
//         }
        

//     }
// }                                                    
                                                

/**
 * main
 */
public class main {

    public static void main(String[] args) throws InterruptedException  {
        for(int i = 1; i <= 10; i++){
            System.out.println(i);
            Thread.sleep(1000);
        }
    }
}














