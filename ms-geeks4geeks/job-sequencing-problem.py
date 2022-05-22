# https://www.geeksforgeeks.org/job-sequencing-problem/
# UI library
import tkinter as tk
import sys

# Program to find the maximum profit
# job sequence from a given array
# of jobs with deadlines and profits
 
# function to schedule the jobs take 2
# arguments array and no of jobs to schedule
 
 
def printJobScheduling(arr, t):
 
    # length of array
    n = len(arr)
 
    # Sort all jobs according to
    # decreasing order of profit
    for i in range(n):
        for j in range(n - 1 - i):
            if arr[j][2] < arr[j + 1][2]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
 
    # To keep track of free time slots
    result = [False] * t
 
    # To store result (Sequence of jobs)
    job = ['-1'] * t
 
    # Iterate through all given jobs
    for i in range(len(arr)):
 
        # Find a free slot for this job
        # (Note that we start from the
        # last possible slot)
        for j in range(min(t - 1, arr[i][1] - 1), -1, -1):
 
            # Free slot found
            if result[j] is False:
                result[j] = True
                job[j] = arr[i][0]
                break
 
    # print the sequence
    print(job)
 
#  UI for user input
def main():
    # Create a GUI window
    window = tk.Tk()
    window.title("Job Scheduling")
    window.geometry("500x500")
    window.configure(background='#FFFFFF')
 
    # Create a label in the GUI window
    tk.Label(window, text="Enter the number of jobs: ", bg='#FFFFFF', fg='#000000').grid(column=0, row=0)
 
    # Create a text entry box for
    # accepting number of jobs
    tk.Entry(window, width=10, bg='#FFFFFF', fg='#000000').grid(column=1, row=0)
 
    # Store the entered number of jobs
    # in a variable
    jobs = tk.IntVar()

    # Create a label in the GUI window
    tk.Label(window, text="Enter the deadline and profit for each job: ", bg='#FFFFFF', fg='#000000').grid(column=0, row=2)

    # Create a text entry box for
    # accepting number of jobs
    tk.Entry(window, width=10, bg='#FFFFFF', fg='#000000').grid(column=1, row=2)

    # Store user input in a variable
    number_of_jobs = int(tk.Entry(window).get())

    # Create confirm button to call
    # printJobScheduling function
    tk.Button(window, text="Confirm", bg='#FFFFFF', fg='#000000', command=printJobScheduling(jobs)).grid(column=1, row=3)

    # Start the GUI
    window.mainloop()
 
    # Start the GUI
    window.mainloop()
    

    # Start the GUI
    window.mainloop()


if __name__ == '__main__':
    main()
