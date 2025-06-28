using System;

public class Kata
{
  public static bool Narcissistic(int value)
  {
    // Check if value is a Narcissistic number, if true, return true, if false, return false
    var valueString = value.ToString();
    var valueLength = valueString.Length;
    var valueSum = 0;
    for (var i = 0; i < valueLength; i++)
    {
      valueSum += (int)Math.Pow(int.Parse(valueString[i].ToString()), valueLength);
    }
    return valueSum == value;
  }
}