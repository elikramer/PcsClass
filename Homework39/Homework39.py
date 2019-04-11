

def months_and_days():
    months = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December']
    days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    for month, day in zip(months, days):   
        print(month, day)
          
print(months_and_days())

def months_days_tuple():
         months = ('January', 'February', 'March', 'April', 'May', 'June',
         'July', 'August', 'September', 'October', 'November', 'December')  
         days = (31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31)
         for month, day in zip(months, days):
                 print(month, day)

print(months_days_tuple()) 

def months_days_dict():
        months_days = {'January':31, 'February':28, 'March':31, 'April':30, 'May':31, 'June':30, 'July':31,
                        'August':31, 'September':30, 'October':31, 'November':30, 'December':31}
        for keys,values in months_days.items():
                print(keys)
                print(values)    

print(months_days_dict())    



