import java.util.*;

class Test{  
    public static void main(String arg[]){
int a[] = new int[4];
a[1]=32;
a[0]=31;
a[2] =54;
a[3]=65;
for(int i =0; i<a.length; i++)
{System.out.println(a[i]);}

ArrayList<String> al = new ArrayList();
al.add("taco");
al.add("burrito");
al.add("chips");

System.out.println("ArrayList Elements");
System.out.println( al);
    
  //linkedlist
  List l2 = new LinkedList();
  l2.add("sara");
  l2.add("ben");
  l2.add("steve");
  System.out.println("LinkedList elements");
  System.out.println(l2);

//set
Set s1 = new HashSet();
s1.add("husky");
s1.add("lab");
s1.add("poodle");
System.out.println("Set Elements");
System.out.println(s1);

//hashMap
Map m1 = new HashMap();
m1.put("chair", 1);
m1.put("couch", 2);
m1.put("bed", 3);
System.out.println("Map Elements");
System.out.println(m1);

}
  


}

