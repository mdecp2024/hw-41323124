# Given values
v0_kmh = 310  # Initial velocity in km/h
vf_kmh = 0    # Final velocity in km/h (jet stops)
d = 1000      # Distance in meters

# Convert velocity from km/h to m/s
v0 = v0_kmh * (1000 / 3600)  # 1 km/h = 1000 m / 3600 s
vf = vf_kmh * (1000 / 3600)  # 1 km/h = 1000 m / 3600 s

# Use the equation: v_f^2 = v_0^2 + 2ad to solve for acceleration (a)
# Rearranging: a = (v_f^2 - v_0^2) / (2 * d)
a = (vf**2 - v0**2) / (2 * d)

# Print the result
print(f"The required constant acceleration is {a:.2f} m/s^2")
