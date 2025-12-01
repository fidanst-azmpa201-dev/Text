using System;
using System.Threading;

using System;
using System.Threading;

class Program
{
    static void DoWork(string name)
    {
        for (int i = 0; i < 5; i++)
        {
            Console.WriteLine($"{name} - i = {i}, Thread ID = {Thread.CurrentThread.ManagedThreadId}");
            Thread.Sleep(200); // sadəcə görsənsin ki, qarışırlar
        }
    }

    static void Main()
    {
        Console.WriteLine($"Main Thread ID: {Thread.CurrentThread.ManagedThreadId}");

        Thread t1 = new Thread(() => DoWork("T1")); // yeni thread
        Thread t2 = new Thread(() => DoWork("T2")); // başqa thread

        t1.Start();
        t2.Start();

        DoWork("MAIN"); // main thread özü də işləyir

        t1.Join(); // t1 bitsin
        t2.Join(); // t2 bitsin

        Console.WriteLine("Butun threadler bitdi");
    }
}

