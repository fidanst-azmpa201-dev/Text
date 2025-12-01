//using System;
//using Models;

//namespace ConsoleApp9
//{
//    public  class Program
//    {
//        static void Main()
//        {
//            Console.WriteLine($"Enter the name employee");




//        }
//    }
//}




using Models;
using System;
using System.Xml.Linq;

class Program
{
    static void Main()
    {
        int count;
        Console.WriteLine("How much add employee?");
        count = int.Parse(Console.ReadLine());
        Employee[] employees = new Employee[count];
        
        
        for (int i = 0; i < employees.Length; i++)
        {
            Console.Write($"{i + 1}.Enter name: ");
            string name = Console.ReadLine();
            Console.Write("Is  successful? (true/false): ");
            bool isSuccessfull = bool.Parse(Console.ReadLine());
            Console.Write("Enter salary: ");
            decimal salary = decimal.Parse(Console.ReadLine());

            employees[i] = new Employee(name, isSuccessfull, salary);

        }
        Assistant assistant = new Assistant("Fidan", true, 99999);
        Console.WriteLine("\n Before Feedback");
        foreach (var e in employees)
        {
            Console.WriteLine(e.ToString());


        }
        Console.WriteLine("\nAfter feedback:");
        foreach (var e in employees)
        {
            assistant.GetFeedBack(e);
            
        }



    }
}





