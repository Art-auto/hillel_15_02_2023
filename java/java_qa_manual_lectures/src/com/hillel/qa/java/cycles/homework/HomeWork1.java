package com.hillel.qa.java.cycles.homework;

public class HomeWork1 {
    /**
     * <p style="font-size:12px">
     *     Ввести з клавіатури марку авто, використовуючи цикл while, 10 разів вивести: <марка> найкраще авто.
     * </p>
     */
    public static void main(String[] args) {
        String str = "<Зaporojec>";
        int count = 0;
        while (count < 10) {
            System.out.println(str + "  best of the best car  ");
            count++;
        }

    }
}
