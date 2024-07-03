import pandas as pd
import matplotlib.pyplot as plt

# Corrected dataset excluding the invalid date "2024-02-30"
data = {
    "Date": ["2024-03-28", "2024-03-29", "2024-03-30", "2024-03-31",
             "2024-04-01", "2024-04-02", "2024-04-03", "2024-04-05", "2024-04-08",
             "2024-04-09", "2024-04-10", "2024-04-11", "2024-04-12", "2024-04-14",
             "2024-04-15", "2024-04-16", "2024-04-18", "2024-04-19", "2024-04-21",
             "2024-04-25", "2024-04-29", "2024-05-04", "2024-05-07", "2024-05-12",
             "2024-05-13", "2024-05-18", "2024-05-20", "2024-05-23", "2024-05-25",
             "2024-05-26", "2024-06-06", "2024-06-07"],
    "Value": [100, 412, 50, 70, 440, 440, 444, 504, 516, 516,
              524, 547, 639, 461, 464, 464, 464, 464, 464, 492,
              532, 559, 563, 597, 598, 603, 603, 603, 423, 442,
              402, 423, 389]
}

# Ensure both lists are of the same length
assert len(data["Date"]) == len(data["Value"]), "Data length mismatch!"

# Convert data to DataFrame
df = pd.DataFrame(data)

# Convert Date column to datetime
df['Date'] = pd.to_datetime(df['Date'])

# Sort by Date
df = df.sort_values('Date')

# Scale data
original_values = df['Value'].values
scaled_values = (original_values - original_values.min()) / (original_values.max() - original_values.min())

# Plotting the original data and scaled data
plt.figure(figsize=(14, 7))

plt.subplot(1, 2, 1)
plt.plot(df['Date'], original_values, 'o-', label='Original Data')
plt.title('Original Data')
plt.xlabel('Date')
plt.ylabel('Value')
plt.xticks(rotation=45)
plt.legend()

plt.subplot(1, 2, 2)
plt.plot(df['Date'], scaled_values, 'o-', label='Scaled Data', color='green')
plt.title('Scaled Data')
plt.xlabel('Date')
plt.ylabel('Scaled Value')
plt.xticks(rotation=45)
plt.legend()

plt.tight_layout()
plt.show()
