const questionBank =
 [
  {
    "subject": "Physics",
    "topics": [
      {
        "name": "Mechanics",
        "questions": [
          {"id": 1, "difficulty": "easy", "question": "SI unit of Power?", "options": ["Joule", "Watt", "Newton", "Pascal"], "answer": "Watt"},
          {"id": 2, "difficulty": "easy", "question": "Dimensional formula for Pressure?", "options": ["MLT-2", "ML-1T-2", "ML2T-2", "M0L0T0"], "answer": "ML-1T-2"},
          {"id": 3, "difficulty": "easy", "question": "Which Newton's law defines force?", "options": ["First", "Second", "Third", "Zeroth"], "answer": "Second"},
          {"id": 4, "difficulty": "easy", "question": "Is displacement a scalar or vector?", "options": ["Scalar", "Vector", "Both", "None"], "answer": "Vector"},
          {"id": 5, "difficulty": "medium", "question": "If velocity is doubled, KE becomes?", "options": ["2x", "4x", "8x", "0.5x"], "answer": "4x"},
          {"id": 6, "difficulty": "medium", "question": "Work done by static friction is?", "options": ["Always +ve", "Always -ve", "Zero", "Can be any"], "answer": "Can be any"},
          {"id": 7, "difficulty": "medium", "question": "Angle for maximum range of projectile?", "options": ["30", "45", "60", "90"], "answer": "45"},
          {"id": 8, "difficulty": "medium", "question": "Unit of Coefficient of Friction?", "options": ["Newton", "Kg", "Meter", "Unitless"], "answer": "Unitless"},
          {"id": 9, "difficulty": "hard", "question": "Moment of inertia of a ring about diameter?", "options": ["MR2", "1/2 MR2", "1/4 MR2", "2 MR2"], "answer": "1/2 MR2"},
          {"id": 10, "difficulty": "hard", "question": "Escape velocity depends on mass of body as?", "options": ["m^1", "m^0", "m^2", "m^-1"], "answer": "m^0"},
          {"id": 11, "difficulty": "easy", "question": "Unit of momentum?", "options": ["kg m/s", "Newton", "Joule", "Watt"], "answer": "kg m/s"},
          {"id": 12, "difficulty": "easy", "question": "Acceleration due to gravity on Earth is approximately?", "options": ["9.8 m/s²", "10 m/s²", "8.9 m/s²", "7.8 m/s²"], "answer": "9.8 m/s²"},
          {"id": 13, "difficulty": "medium", "question": "Centripetal force is given by?", "options": ["mv²/r", "mr²/v", "mv/r", "mr/v²"], "answer": "mv²/r"},
          {"id": 14, "difficulty": "medium", "question": "Impulse is equal to change in?", "options": ["Momentum", "Force", "Velocity", "Acceleration"], "answer": "Momentum"},
          {"id": 15, "difficulty": "easy", "question": "Unit of work?", "options": ["Joule", "Newton", "Pascal", "Watt"], "answer": "Joule"},
          {"id": 16, "difficulty": "medium", "question": "Work done when force is perpendicular to displacement?", "options": ["Zero", "Maximum", "Minimum", "Infinite"], "answer": "Zero"},
          {"id": 17, "difficulty": "medium", "question": "Potential energy near Earth surface is?", "options": ["mgh", "mv²", "1/2mv²", "mg"], "answer": "mgh"},
          {"id": 18, "difficulty": "easy", "question": "SI unit of force?", "options": ["Newton", "Joule", "Watt", "Pascal"], "answer": "Newton"},
          {"id": 19, "difficulty": "medium", "question": "Momentum formula?", "options": ["mv", "ma", "mgh", "v/t"], "answer": "mv"},
          {"id": 20, "difficulty": "medium", "question": "Power equals?", "options": ["Work/time", "Force/time", "Energy/time²", "Distance/time"], "answer": "Work/time"},
          {"id": 21, "difficulty": "easy", "question": "SI unit of energy?", "options": ["Joule", "Newton", "Watt", "Volt"], "answer": "Joule"},
          {"id": 22, "difficulty": "medium", "question": "Kinetic energy formula?", "options": ["1/2mv²", "mv", "mgh", "ma"], "answer": "1/2mv²"},
          {"id": 23, "difficulty": "medium", "question": "Average velocity equals?", "options": ["Displacement/time", "Distance/time", "Force/time", "Mass/time"], "answer": "Displacement/time"},
          {"id": 24, "difficulty": "hard", "question": "Escape velocity from Earth is approximately?", "options": ["11.2 km/s", "7.9 km/s", "9.8 km/s", "15 km/s"], "answer": "11.2 km/s"},
          {"id": 25, "difficulty": "medium", "question": "Acceleration unit?", "options": ["m/s²", "m/s", "kg", "N"], "answer": "m/s²"},
          {"id": 26, "difficulty": "easy", "question": "Mass unit?", "options": ["kg", "g", "N", "J"], "answer": "kg"},
          {"id": 27, "difficulty": "medium", "question": "Velocity unit?", "options": ["m/s", "m", "s", "kg"], "answer": "m/s"},
          {"id": 28, "difficulty": "medium", "question": "Projectile trajectory is?", "options": ["Parabola", "Circle", "Ellipse", "Straight line"], "answer": "Parabola"},
          {"id": 29, "difficulty": "hard", "question": "Gravitational force formula?", "options": ["GMm/r²", "mv²/r", "ma", "mgh"], "answer": "GMm/r²"},
          {"id": 30, "difficulty": "medium", "question": "Angular velocity unit?", "options": ["rad/s", "m/s", "N", "rad"], "answer": "rad/s"},
          {"id": 31, "difficulty": "medium", "question": "Torque formula?", "options": ["r × F", "F/r", "F+r", "r/F"], "answer": "r × F"},
          {"id": 32, "difficulty": "hard", "question": "Angular momentum formula?", "options": ["r × p", "mv", "mr²", "Iω²"], "answer": "r × p"},
          {"id": 33, "difficulty": "easy", "question": "Unit of torque?", "options": ["N·m", "J", "kg", "W"], "answer": "N·m"},
          {"id": 34, "difficulty": "medium", "question": "Moment of inertia unit?", "options": ["kg m²", "kg m", "kg/m", "m²"], "answer": "kg m²"},
          {"id": 35, "difficulty": "hard", "question": "Moment of inertia of a solid sphere about diameter?", "options": ["2/5 MR²", "MR²", "1/2 MR²", "1/5 MR²"], "answer": "2/5 MR²"},
          {"id": 36, "difficulty": "medium", "question": "Time period of simple pendulum?", "options": ["2π√(L/g)", "√(L/g)", "2πL/g", "L/g"], "answer": "2π√(L/g)"},
          {"id": 37, "difficulty": "medium", "question": "Hooke’s law is?", "options": ["F = −kx", "F = kx²", "F = ma", "F = k/x"], "answer": "F = −kx"},
          {"id": 38, "difficulty": "easy", "question": "Spring constant unit?", "options": ["N/m", "N", "m", "J"], "answer": "N/m"},
          {"id": 39, "difficulty": "medium", "question": "Elastic potential energy?", "options": ["1/2kx²", "kx", "kx²", "1/2mv²"], "answer": "1/2kx²"},
          {"id": 40, "difficulty": "medium", "question": "Terminal velocity occurs when?", "options": ["Net force zero", "Velocity zero", "Acceleration infinite", "Mass zero"], "answer": "Net force zero"},
          {"id": 41, "difficulty": "easy", "question": "Unit of density?", "options": ["kg/m³", "kg/m", "kg", "m³"], "answer": "kg/m³"},
          {"id": 42, "difficulty": "medium", "question": "Pressure formula?", "options": ["F/A", "A/F", "F×A", "F+A"], "answer": "F/A"},
          {"id": 43, "difficulty": "medium", "question": "Pascal's law applies to?", "options": ["Fluids", "Solids", "Gases only", "Vacuum"], "answer": "Fluids"},
          {"id": 44, "difficulty": "hard", "question": "Bernoulli equation includes?", "options": ["Pressure + KE + PE", "Only pressure", "Only velocity", "Only density"], "answer": "Pressure + KE + PE"},
          {"id": 45, "difficulty": "medium", "question": "Buoyant force equals?", "options": ["Weight of displaced fluid", "Mass of body", "Density × volume", "Pressure × area"], "answer": "Weight of displaced fluid"},
          {"id": 46, "difficulty": "easy", "question": "Archimedes principle relates to?", "options": ["Buoyancy", "Friction", "Momentum", "Torque"], "answer": "Buoyancy"},
          {"id": 47, "difficulty": "medium", "question": "Coefficient of friction symbol?", "options": ["μ", "λ", "θ", "ρ"], "answer": "μ"},
          {"id": 48, "difficulty": "medium", "question": "Static friction compared to kinetic friction?", "options": ["Greater", "Less", "Equal", "Zero"], "answer": "Greater"},
          {"id": 49, "difficulty": "hard", "question": "Work-energy theorem states?", "options": ["Work = change in KE", "Work = PE", "Work = force", "Work = momentum"], "answer": "Work = change in KE"},
          {"id": 50, "difficulty": "medium", "question": "Mechanical energy equals?", "options": ["KE + PE", "KE only", "PE only", "Work only"], "answer": "KE + PE"},
          {"id": 51, "difficulty": "medium", "question": "Law of conservation of energy states?", "options": ["Energy constant", "Energy destroyed", "Energy infinite", "Energy negative"], "answer": "Energy constant"},
          {"id": 52, "difficulty": "easy", "question": "Unit of angular acceleration?", "options": ["rad/s²", "m/s²", "rad/s", "N"], "answer": "rad/s²"},
          {"id": 53, "difficulty": "medium", "question": "Centrifugal force acts?", "options": ["Outward", "Inward", "Upward", "Downward"], "answer": "Outward"},
          {"id": 54, "difficulty": "medium", "question": "Circular motion requires?", "options": ["Centripetal force", "Gravity", "Friction only", "No force"], "answer": "Centripetal force"},
          {"id": 55, "difficulty": "hard", "question": "Escape velocity independent of?", "options": ["Mass of object", "Mass of planet", "Radius of planet", "Gravitational constant"], "answer": "Mass of object"},
          {"id": 56, "difficulty": "medium", "question": "Unit of gravitational constant?", "options": ["Nm²/kg²", "N/kg²", "kg/m²", "Nm/kg"], "answer": "Nm²/kg²"},
          {"id": 57, "difficulty": "easy", "question": "SI unit of distance?", "options": ["Meter", "Second", "Newton", "Kelvin"], "answer": "Meter"},
          {"id": 58, "difficulty": "medium", "question": "Relative velocity formula?", "options": ["v₁ − v₂", "v₁ + v₂", "v₁v₂", "v₁/v₂"], "answer": "v₁ − v₂"},
          {"id": 59, "difficulty": "medium", "question": "Free fall motion has acceleration?", "options": ["g", "0", "2g", "g/2"], "answer": "g"},
          {"id": 60, "difficulty": "hard", "question": "Orbital velocity near Earth?", "options": ["7.9 km/s", "11.2 km/s", "5 km/s", "15 km/s"], "answer": "7.9 km/s"},
          {"id": 61, "difficulty": "medium", "question": "Weight formula?", "options": ["mg", "mv", "ma", "mgh"], "answer": "mg"},
          {"id": 62, "difficulty": "medium", "question": "Centre of mass depends on?", "options": ["Mass distribution", "Velocity", "Acceleration", "Force"], "answer": "Mass distribution"}
        ]
      },
      {
        "name": "Electrodynamics",
        "questions": [
          {"id":63,"difficulty":"easy","question":"SI unit of electric current?","options":["Ampere","Volt","Ohm","Coulomb"],"answer":"Ampere"},
          {"id":64,"difficulty":"easy","question":"Unit of electric potential?","options":["Volt","Ampere","Ohm","Tesla"],"answer":"Volt"},
          {"id":65,"difficulty":"medium","question":"Electric field unit?","options":["N/C","C/N","J/C","V/A"],"answer":"N/C"},
          {"id":66,"difficulty":"medium","question":"Electric force between two charges is given by?","options":["Coulomb's law","Ohm's law","Faraday law","Ampere law"],"answer":"Coulomb's law"},
          {"id":67,"difficulty":"medium","question":"Coulomb's law force varies inversely with?","options":["r²","r","r³","√r"],"answer":"r²"},
          {"id":68,"difficulty":"easy","question":"Charge of electron?","options":["-1.6×10^-19 C","+1.6×10^-19 C","0","1 C"],"answer":"-1.6×10^-19 C"},
          {"id":69,"difficulty":"medium","question":"Electric potential energy between charges?","options":["kq1q2/r","qV","F/q","q/r"],"answer":"kq1q2/r"},
          {"id":70,"difficulty":"medium","question":"Potential difference formula?","options":["W/q","q/W","V/I","IR"],"answer":"W/q"},
          {"id":71,"difficulty":"hard","question":"Electric field due to point charge?","options":["kq/r²","q/r","kq/r","q/r²"],"answer":"kq/r²"},
          {"id":72,"difficulty":"medium","question":"Gauss law relates flux with?","options":["Charge enclosed","Current","Voltage","Resistance"],"answer":"Charge enclosed"},
          {"id":73,"difficulty":"easy","question":"Unit of resistance?","options":["Ohm","Volt","Ampere","Farad"],"answer":"Ohm"},
          {"id":74,"difficulty":"medium","question":"Resistors in series share same?","options":["Current","Voltage","Power","Resistance"],"answer":"Current"},
          {"id":75,"difficulty":"medium","question":"Resistors in parallel share same?","options":["Voltage","Current","Power","Charge"],"answer":"Voltage"},
          {"id":76,"difficulty":"medium","question":"Equivalent resistance in series?","options":["Sum","Product","Difference","Inverse sum"],"answer":"Sum"},
          {"id":77,"difficulty":"hard","question":"Equivalent resistance in parallel formula?","options":["1/R = 1/R1 + 1/R2","R = R1 + R2","R = R1R2","R = R1/R2"],"answer":"1/R = 1/R1 + 1/R2"},
          {"id":78,"difficulty":"easy","question":"Unit of magnetic field?","options":["Tesla","Henry","Weber","Farad"],"answer":"Tesla"},
          {"id":79,"difficulty":"medium","question":"Magnetic field around straight wire?","options":["μ0I/2πr","μ0I/r","μ0Ir","μ0I/4π"],"answer":"μ0I/2πr"},
          {"id":80,"difficulty":"medium","question":"Force on moving charge in magnetic field?","options":["qvB","qE","mv²/r","F=ma"],"answer":"qvB"},
          {"id":81,"difficulty":"hard","question":"Lorentz force formula?","options":["q(E + v×B)","qE","qvB","mv²/r"],"answer":"q(E + v×B)"},
          {"id":82,"difficulty":"medium","question":"Magnetic flux unit?","options":["Weber","Tesla","Henry","Volt"],"answer":"Weber"},
          {"id":83,"difficulty":"medium","question":"Faraday law relates emf with?","options":["Rate of change of flux","Current","Voltage","Resistance"],"answer":"Rate of change of flux"},
          {"id":84,"difficulty":"hard","question":"Lenz law represents?","options":["Direction of induced current","Magnitude of current","Voltage drop","Resistance"],"answer":"Direction of induced current"},
          {"id":85,"difficulty":"easy","question":"Unit of inductance?","options":["Henry","Tesla","Weber","Farad"],"answer":"Henry"},
          {"id":86,"difficulty":"medium","question":"Induced emf formula?","options":["-dΦ/dt","qV","IR","V/I"],"answer":"-dΦ/dt"},
          {"id":87,"difficulty":"medium","question":"AC frequency in India?","options":["50 Hz","60 Hz","100 Hz","25 Hz"],"answer":"50 Hz"},
          {"id":88,"difficulty":"medium","question":"Reactance of inductor?","options":["ωL","1/ωC","R","ωC"],"answer":"ωL"},
          {"id":89,"difficulty":"medium","question":"Reactance of capacitor?","options":["1/ωC","ωC","ωL","R"],"answer":"1/ωC"},
          {"id":90,"difficulty":"hard","question":"Resonance condition in LCR circuit?","options":["XL = XC","XL > XC","XL < XC","R = 0"],"answer":"XL = XC"},
          {"id":91,"difficulty":"easy","question":"Unit of electric power?","options":["Watt","Joule","Volt","Ohm"],"answer":"Watt"},
          {"id":92,"difficulty":"medium","question":"Power formula in circuit?","options":["VI","IR","V/I","qV"],"answer":"VI"},
          {"id":93,"difficulty":"medium","question":"Electrical energy unit?","options":["kWh","Volt","Ohm","Henry"],"answer":"kWh"},
          {"id":94,"difficulty":"easy","question":"Device to measure current?","options":["Ammeter","Voltmeter","Galvanometer","Ohmmeter"],"answer":"Ammeter"},
          {"id":95,"difficulty":"easy","question":"Device to measure voltage?","options":["Voltmeter","Ammeter","Galvanometer","Barometer"],"answer":"Voltmeter"},
          {"id":96,"difficulty":"medium","question":"Resistance of ideal ammeter?","options":["Zero","Infinite","1 Ohm","100 Ohm"],"answer":"Zero"},
          {"id":97,"difficulty":"medium","question":"Galvanometer converts to voltmeter using?","options":["High resistance","Low resistance","Capacitor","Inductor"],"answer":"High resistance"},
          {"id":98,"difficulty":"medium","question":"Biot Savart law relates?","options":["Magnetic field and current","Voltage and current","Charge and flux","Resistance and current"],"answer":"Magnetic field and current"},
          {"id":99,"difficulty":"hard","question":"Magnetic field inside solenoid?","options":["μ0nI","μ0I/r","μ0Ir","μ0n/r"],"answer":"μ0nI"},
          {"id":100,"difficulty":"medium","question":"Right hand thumb rule determines?","options":["Direction of magnetic field","Voltage direction","Current magnitude","Resistance"],"answer":"Direction of magnetic field"},
          {"id":101,"difficulty":"easy","question":"Unit of capacitance?","options":["Farad","Henry","Tesla","Volt"],"answer":"Farad"},
          {"id":102,"difficulty":"medium","question":"Capacitance of parallel plate capacitor?","options":["εA/d","εd/A","Ad/ε","Aεd"],"answer":"εA/d"},
          {"id":103,"difficulty":"medium","question":"Energy stored in capacitor?","options":["1/2CV²","CV","V²/C","C/V"],"answer":"1/2CV²"},
          {"id":104,"difficulty":"easy","question":"Magnetic field lines form?","options":["Closed loops","Straight lines","Circles only","Spirals"],"answer":"Closed loops"},
          {"id":105,"difficulty":"medium","question":"Force on current carrying wire?","options":["BIL","qvB","IL/B","I/B"],"answer":"BIL"},
          {"id":106,"difficulty":"medium","question":"Magnetic moment unit?","options":["A·m²","A/m","T·m","Wb"],"answer":"A·m²"},
          {"id":107,"difficulty":"hard","question":"Cyclotron frequency depends on?","options":["Charge and magnetic field","Velocity","Radius","Voltage"],"answer":"Charge and magnetic field"},
          {"id":108,"difficulty":"medium","question":"Current density symbol?","options":["J","I","ρ","E"],"answer":"J"},
          {"id":109,"difficulty":"medium","question":"Drift velocity proportional to?","options":["Electric field","Charge","Mass","Resistance"],"answer":"Electric field"},
          {"id":110,"difficulty":"easy","question":"Conductivity unit?","options":["S/m","Ohm","Volt","Ampere"],"answer":"S/m"},
          {"id":111,"difficulty":"medium","question":"Relation between resistivity and conductivity?","options":["σ = 1/ρ","σ = ρ","σ = ρ²","σ = 2ρ"],"answer":"σ = 1/ρ"},
          {"id":112,"difficulty":"medium","question":"Electric field inside conductor?","options":["Zero","Maximum","Infinite","Constant"],"answer":"Zero"},
          {"id":113,"difficulty":"hard","question":"Charge resides on conductor?","options":["Surface","Center","Uniform volume","Edges only"],"answer":"Surface"},
          {"id":114,"difficulty":"medium","question":"Electrostatic potential inside conductor?","options":["Constant","Zero","Infinite","Variable"],"answer":"Constant"},
          {"id":115,"difficulty":"medium","question":"Capacitors in series have same?","options":["Charge","Voltage","Capacitance","Energy"],"answer":"Charge"},
          {"id":116,"difficulty":"medium","question":"Capacitors in parallel have same?","options":["Voltage","Charge","Energy","Current"],"answer":"Voltage"},
          {"id":117,"difficulty":"hard","question":"Energy density in electric field?","options":["1/2 εE²","εE","ε/E","E²"],"answer":"1/2 εE²"},
          {"id":118,"difficulty":"medium","question":"Dielectric increases capacitance by factor?","options":["K","1/K","K²","√K"],"answer":"K"},
          {"id":119,"difficulty":"medium","question":"Electric dipole moment unit?","options":["C·m","C/m","N·m","J"],"answer":"C·m"},
          {"id":120,"difficulty":"hard","question":"Torque on electric dipole?","options":["pE sinθ","pE cosθ","p/E","p+E"],"answer":"pE sinθ"},
          {"id":121,"difficulty":"medium","question":"Potential due to dipole varies as?","options":["1/r²","1/r","1/r³","r²"],"answer":"1/r²"},
          {"id":122,"difficulty":"medium","question":"Electric flux unit?","options":["N·m²/C","C/N","V/m","N/C"],"answer":"N·m²/C"},
          {"id":123,"difficulty":"hard","question":"Gauss law constant term?","options":["1/ε0","ε0","μ0","1/μ0"],"answer":"1/ε0"},
          {"id":124,"difficulty":"medium","question":"Electric field due to infinite plane sheet?","options":["σ/2ε0","σ/ε0","ε0/σ","2σ/ε0"],"answer":"σ/2ε0"}
        ]
      },
      {
        "name": "Thermal and Fluids",
        "questions": [
          {"id":125,"difficulty":"easy","question":"SI unit of temperature?","options":["Kelvin","Celsius","Fahrenheit","Rankine"],"answer":"Kelvin"},
          {"id":126,"difficulty":"easy","question":"Absolute zero in Celsius?","options":["-273.15","0","-100","-200"],"answer":"-273.15"},
          {"id":127,"difficulty":"easy","question":"Unit of heat?","options":["Joule","Watt","Newton","Pascal"],"answer":"Joule"},
          {"id":128,"difficulty":"medium","question":"Ideal gas equation?","options":["PV=nRT","P=nRT","V=nRT","PV=RT"],"answer":"PV=nRT"},
          {"id":129,"difficulty":"medium","question":"Cp − Cv equals?","options":["R","2R","R/2","0"],"answer":"R"},
          {"id":130,"difficulty":"medium","question":"Efficiency of Carnot engine depends on?","options":["Temperature","Pressure","Volume","Mass"],"answer":"Temperature"},
          {"id":131,"difficulty":"easy","question":"SI unit of pressure?","options":["Pascal","Newton","Joule","Watt"],"answer":"Pascal"},
          {"id":132,"difficulty":"medium","question":"Pressure formula?","options":["F/A","A/F","F×A","F+A"],"answer":"F/A"},
          {"id":133,"difficulty":"medium","question":"Bernoulli's principle applies to?","options":["Fluid flow","Electric field","Magnetism","Radiation"],"answer":"Fluid flow"},
          {"id":134,"difficulty":"easy","question":"Density formula?","options":["Mass/Volume","Volume/Mass","Mass×Volume","Mass+Volume"],"answer":"Mass/Volume"},

          {"id":135,"difficulty":"medium","question":"Buoyant force equals?","options":["Weight of displaced fluid","Mass of fluid","Pressure×Area","Density"],"answer":"Weight of displaced fluid"},
          {"id":136,"difficulty":"easy","question":"Archimedes principle relates to?","options":["Buoyancy","Heat","Pressure","Velocity"],"answer":"Buoyancy"},
          {"id":137,"difficulty":"medium","question":"Terminal velocity depends on?","options":["Radius of object","Mass only","Height","Volume only"],"answer":"Radius of object"},
          {"id":138,"difficulty":"hard","question":"Stokes law force formula?","options":["6πηrv","ηrv","6πrv","6ηrv"],"answer":"6πηrv"},
          {"id":139,"difficulty":"medium","question":"Viscosity unit?","options":["Poise","Pascal","Newton","Watt"],"answer":"Poise"},
          {"id":140,"difficulty":"easy","question":"Specific heat unit?","options":["J/kgK","J","K","W"],"answer":"J/kgK"},

          {"id":141,"difficulty":"medium","question":"Heat transfer through solids occurs by?","options":["Conduction","Convection","Radiation","Diffusion"],"answer":"Conduction"},
          {"id":142,"difficulty":"medium","question":"Heat transfer in liquids mainly by?","options":["Convection","Conduction","Radiation","Reflection"],"answer":"Convection"},
          {"id":143,"difficulty":"easy","question":"Radiation does not require?","options":["Medium","Energy","Heat","Temperature"],"answer":"Medium"},
          {"id":144,"difficulty":"medium","question":"Stefan Boltzmann law relates energy with?","options":["Temperature^4","Temperature^2","Temperature","Temperature^3"],"answer":"Temperature^4"},
          {"id":145,"difficulty":"hard","question":"Wien's displacement law relates wavelength with?","options":["Temperature","Pressure","Volume","Mass"],"answer":"Temperature"},

          {"id":146,"difficulty":"easy","question":"Thermal conductivity symbol?","options":["k","μ","ρ","η"],"answer":"k"},
          {"id":147,"difficulty":"medium","question":"First law of thermodynamics?","options":["ΔQ = ΔU + W","ΔQ = W","ΔU = Q","W = U"],"answer":"ΔQ = ΔU + W"},
          {"id":148,"difficulty":"medium","question":"Adiabatic process means?","options":["No heat transfer","Constant pressure","Constant volume","Constant temperature"],"answer":"No heat transfer"},
          {"id":149,"difficulty":"medium","question":"Isothermal process means?","options":["Constant temperature","Constant pressure","Constant volume","No heat"],"answer":"Constant temperature"},
          {"id":150,"difficulty":"hard","question":"Adiabatic relation for ideal gas?","options":["PV^γ = constant","PV = constant","P/T = constant","V/T = constant"],"answer":"PV^γ = constant"},

          {"id":151,"difficulty":"easy","question":"Gas constant symbol?","options":["R","k","G","T"],"answer":"R"},
          {"id":152,"difficulty":"medium","question":"Mean free path relates to?","options":["Molecular collisions","Temperature only","Pressure only","Volume only"],"answer":"Molecular collisions"},
          {"id":153,"difficulty":"medium","question":"Root mean square velocity formula?","options":["√(3kT/m)","kT/m","3kT/m","√(kT/m)"],"answer":"√(3kT/m)"},
          {"id":154,"difficulty":"hard","question":"Boltzmann constant value approx?","options":["1.38×10^-23","6.022×10^23","9.8","3×10^8"],"answer":"1.38×10^-23"},

          {"id":155,"difficulty":"easy","question":"Unit of entropy?","options":["J/K","J","K","W"],"answer":"J/K"},
          {"id":156,"difficulty":"medium","question":"Entropy increases in?","options":["Irreversible process","Reversible process","Isothermal","Adiabatic"],"answer":"Irreversible process"},
          {"id":157,"difficulty":"medium","question":"Second law of thermodynamics relates to?","options":["Entropy","Energy","Force","Momentum"],"answer":"Entropy"},
          {"id":158,"difficulty":"hard","question":"Efficiency of Carnot engine?","options":["1 − Tc/Th","Tc/Th","Th/Tc","Tc + Th"],"answer":"1 − Tc/Th"},

          {"id":159,"difficulty":"easy","question":"Hydraulic lift works on?","options":["Pascal's law","Bernoulli law","Newton law","Archimedes law"],"answer":"Pascal's law"},
          {"id":160,"difficulty":"medium","question":"Continuity equation in fluids?","options":["A1V1=A2V2","P1V1=P2V2","PV=nRT","F=ma"],"answer":"A1V1=A2V2"},
          {"id":161,"difficulty":"medium","question":"Surface tension unit?","options":["N/m","N","J","W"],"answer":"N/m"},
          {"id":162,"difficulty":"medium","question":"Capillary rise depends on?","options":["Surface tension","Mass","Volume","Temperature only"],"answer":"Surface tension"},

          {"id":163,"difficulty":"hard","question":"Excess pressure in soap bubble?","options":["4T/r","2T/r","T/r","T/2r"],"answer":"4T/r"},
          {"id":164,"difficulty":"medium","question":"Excess pressure in liquid drop?","options":["2T/r","4T/r","T/r","T/2r"],"answer":"2T/r"},

          {"id":165,"difficulty":"easy","question":"Specific heat of water approx?","options":["4.2 J/gK","2 J/gK","1 J/gK","10 J/gK"],"answer":"4.2 J/gK"},
          {"id":166,"difficulty":"medium","question":"Latent heat formula?","options":["Q=mL","Q=mcΔT","Q=mT","Q=L/T"],"answer":"Q=mL"},
          {"id":167,"difficulty":"medium","question":"Unit of latent heat?","options":["J/kg","J","kg","K"],"answer":"J/kg"},

          {"id":168,"difficulty":"hard","question":"Clausius statement relates to?","options":["Second law","First law","Zeroth law","Newton law"],"answer":"Second law"},
          {"id":169,"difficulty":"medium","question":"Zeroth law relates to?","options":["Thermal equilibrium","Energy","Entropy","Work"],"answer":"Thermal equilibrium"},
          {"id":170,"difficulty":"easy","question":"Temperature measuring device?","options":["Thermometer","Barometer","Hygrometer","Ammeter"],"answer":"Thermometer"},

          {"id":171,"difficulty":"medium","question":"Thermal expansion occurs due to?","options":["Increase in kinetic energy","Decrease energy","Gravity","Pressure"],"answer":"Increase in kinetic energy"},
          {"id":172,"difficulty":"medium","question":"Linear expansion formula?","options":["ΔL = αLΔT","ΔL = L/T","ΔL = αT","ΔL = LT"],"answer":"ΔL = αLΔT"},
          {"id":173,"difficulty":"hard","question":"Volume expansion relation?","options":["β ≈ 3α","β = α","β = 2α","β = α/2"],"answer":"β ≈ 3α"},

          {"id":174,"difficulty":"easy","question":"SI unit of heat capacity?","options":["J/K","J","K","W"],"answer":"J/K"},
          {"id":175,"difficulty":"medium","question":"Heat capacity formula?","options":["Q/ΔT","QΔT","ΔT/Q","Q/T²"],"answer":"Q/ΔT"},

          {"id":176,"difficulty":"medium","question":"Molar heat capacity unit?","options":["J/molK","J/kgK","J/K","K/J"],"answer":"J/molK"},
          {"id":177,"difficulty":"medium","question":"Gas molecules motion described by?","options":["Kinetic theory","Newton law","Ohm law","Gauss law"],"answer":"Kinetic theory"},

          {"id":178,"difficulty":"hard","question":"Average KE of gas molecule?","options":["3/2 kT","kT","2kT","1/2kT"],"answer":"3/2 kT"},
          {"id":179,"difficulty":"medium","question":"RMS speed depends on?","options":["Temperature","Pressure","Volume","Density only"],"answer":"Temperature"},

          {"id":180,"difficulty":"easy","question":"SI unit of viscosity?","options":["Pa·s","N","J","W"],"answer":"Pa·s"},
          {"id":181,"difficulty":"medium","question":"Laminar flow occurs at?","options":["Low velocity","High velocity","High pressure","Low pressure"],"answer":"Low velocity"},
          {"id":182,"difficulty":"medium","question":"Reynolds number indicates?","options":["Nature of flow","Pressure","Temperature","Mass"],"answer":"Nature of flow"},

          {"id":183,"difficulty":"hard","question":"Critical Reynolds number approx?","options":["2000","100","5000","10000"],"answer":"2000"},
          {"id":184,"difficulty":"medium","question":"Heat engine converts?","options":["Heat to work","Work to heat","Energy to mass","Mass to energy"],"answer":"Heat to work"},
          {"id":185,"difficulty":"medium","question":"Refrigerator works on?","options":["Second law","First law","Zeroth law","Newton law"],"answer":"Second law"},
          {"id":186,"difficulty":"medium","question":"Coefficient of performance relates to?","options":["Refrigerator","Engine","Generator","Motor"],"answer":"Refrigerator"}
        ]
      },
      {
        "name": "Optics and Modern Physics",
        "questions": [
          {"id":187,"difficulty":"easy","question":"Speed of light in vacuum?","options":["3×10^8 m/s","3×10^6 m/s","3×10^10 m/s","1×10^8 m/s"],"answer":"3×10^8 m/s"},
          {"id":188,"difficulty":"easy","question":"Unit of wavelength?","options":["Meter","Second","Hertz","Joule"],"answer":"Meter"},
          {"id":189,"difficulty":"easy","question":"Lens used to correct myopia?","options":["Concave","Convex","Bifocal","Plane"],"answer":"Concave"},
          {"id":190,"difficulty":"easy","question":"Lens used for hypermetropia?","options":["Convex","Concave","Cylindrical","Plane"],"answer":"Convex"},
          {"id":191,"difficulty":"medium","question":"Mirror formula?","options":["1/f = 1/v + 1/u","1/f = v/u","f = uv","u = v + f"],"answer":"1/f = 1/v + 1/u"},
          {"id":192,"difficulty":"medium","question":"Magnification formula for mirrors?","options":["-v/u","v/u","u/v","f/u"],"answer":"-v/u"},
          {"id":193,"difficulty":"medium","question":"Refractive index formula?","options":["c/v","v/c","λ/v","vλ"],"answer":"c/v"},
          {"id":194,"difficulty":"medium","question":"Critical angle occurs when refracted angle is?","options":["90°","0°","45°","60°"],"answer":"90°"},
          {"id":195,"difficulty":"hard","question":"Condition for total internal reflection?","options":["Dense to rare medium","Rare to dense medium","Same medium","Vacuum only"],"answer":"Dense to rare medium"},
          {"id":196,"difficulty":"easy","question":"Unit of frequency?","options":["Hertz","Meter","Second","Volt"],"answer":"Hertz"},

          {"id":197,"difficulty":"medium","question":"Wave equation?","options":["v = fλ","v = λ/f","v = f/λ","λ = vf"],"answer":"v = fλ"},
          {"id":198,"difficulty":"medium","question":"Young's double slit experiment shows?","options":["Interference","Reflection","Diffraction","Polarization"],"answer":"Interference"},
          {"id":199,"difficulty":"hard","question":"Fringe width formula?","options":["β = λD/d","β = d/λD","β = D/λd","β = λ/d"],"answer":"β = λD/d"},
          {"id":200,"difficulty":"medium","question":"Diffraction occurs due to?","options":["Wave nature of light","Particle nature","Magnetism","Electric field"],"answer":"Wave nature of light"},
          {"id":201,"difficulty":"medium","question":"Polarization proves?","options":["Transverse nature of light","Longitudinal nature","Particle nature","Reflection"],"answer":"Transverse nature of light"},

          {"id":202,"difficulty":"easy","question":"Unit of power of lens?","options":["Dioptre","Meter","Newton","Watt"],"answer":"Dioptre"},
          {"id":203,"difficulty":"medium","question":"Power of lens formula?","options":["1/f","f","f²","1/f²"],"answer":"1/f"},
          {"id":204,"difficulty":"medium","question":"Refractive index of water approx?","options":["1.33","1.5","2","1"],"answer":"1.33"},
          {"id":205,"difficulty":"hard","question":"Lens maker formula relates?","options":["Focal length and refractive index","Mass","Temperature","Velocity"],"answer":"Focal length and refractive index"},

          {"id":206,"difficulty":"easy","question":"Nature of image in plane mirror?","options":["Virtual","Real","Inverted","Magnified"],"answer":"Virtual"},
          {"id":207,"difficulty":"medium","question":"Magnification of plane mirror?","options":["1","0","-1","Infinite"],"answer":"1"},
          {"id":208,"difficulty":"medium","question":"Number of images between two mirrors depends on?","options":["Angle between mirrors","Distance","Height","Mass"],"answer":"Angle between mirrors"},
          {"id":209,"difficulty":"hard","question":"Condition for infinite images?","options":["Mirrors parallel","90°","60°","45°"],"answer":"Mirrors parallel"},

          {"id":210,"difficulty":"easy","question":"Photon energy formula?","options":["E = hf","E = mc²","E = mv²","E = h/f"],"answer":"E = hf"},
          {"id":211,"difficulty":"medium","question":"Planck constant symbol?","options":["h","c","k","e"],"answer":"h"},
          {"id":212,"difficulty":"medium","question":"Photoelectric effect proves?","options":["Particle nature of light","Wave nature","Magnetic nature","Electric nature"],"answer":"Particle nature of light"},
          {"id":213,"difficulty":"hard","question":"Stopping potential depends on?","options":["Frequency","Intensity","Distance","Voltage"],"answer":"Frequency"},

          {"id":214,"difficulty":"easy","question":"Charge of electron?","options":["-1.6×10^-19 C","+1.6×10^-19 C","0","1 C"],"answer":"-1.6×10^-19 C"},
          {"id":215,"difficulty":"medium","question":"De Broglie wavelength formula?","options":["h/p","p/h","hv","mc²"],"answer":"h/p"},
          {"id":216,"difficulty":"medium","question":"Electron microscope works on?","options":["Wave nature of electrons","Reflection","Refraction","Diffraction of light"],"answer":"Wave nature of electrons"},
          {"id":217,"difficulty":"hard","question":"Heisenberg uncertainty principle relates?","options":["Position and momentum","Energy and power","Force and mass","Velocity and acceleration"],"answer":"Position and momentum"},

          {"id":218,"difficulty":"easy","question":"Bohr model applies to?","options":["Hydrogen atom","All atoms","Molecules","Solids"],"answer":"Hydrogen atom"},
          {"id":219,"difficulty":"medium","question":"Bohr radius value approx?","options":["0.53 Å","1 Å","0.1 Å","5 Å"],"answer":"0.53 Å"},
          {"id":220,"difficulty":"medium","question":"Energy levels in atom are?","options":["Quantized","Continuous","Random","Infinite"],"answer":"Quantized"},
          {"id":221,"difficulty":"hard","question":"Rydberg formula relates to?","options":["Spectral lines","Heat","Pressure","Magnetism"],"answer":"Spectral lines"},

          {"id":222,"difficulty":"easy","question":"Unit of radioactivity?","options":["Becquerel","Tesla","Henry","Watt"],"answer":"Becquerel"},
          {"id":223,"difficulty":"medium","question":"Half life formula relation?","options":["t½ = 0.693/λ","t½ = λ","t½ = λ/2","t½ = 1/λ²"],"answer":"t½ = 0.693/λ"},
          {"id":224,"difficulty":"medium","question":"Alpha particle charge?","options":["+2e","+e","-e","0"],"answer":"+2e"},
          {"id":225,"difficulty":"hard","question":"Mass defect relates to?","options":["Binding energy","Momentum","Velocity","Pressure"],"answer":"Binding energy"},

          {"id":226,"difficulty":"easy","question":"Einstein mass energy relation?","options":["E = mc²","E = mv²","E = hf","E = mc"],"answer":"E = mc²"},
          {"id":227,"difficulty":"medium","question":"Binding energy per nucleon maximum for?","options":["Fe","H","U","He"],"answer":"Fe"},
          {"id":228,"difficulty":"medium","question":"Nuclear fission occurs in?","options":["Heavy nuclei","Light nuclei","Electrons","Photons"],"answer":"Heavy nuclei"},
          {"id":229,"difficulty":"hard","question":"Nuclear fusion occurs in?","options":["Sun","Earth","Atoms","Electrons"],"answer":"Sun"},

          {"id":230,"difficulty":"easy","question":"X-rays discovered by?","options":["Roentgen","Newton","Einstein","Bohr"],"answer":"Roentgen"},
          {"id":231,"difficulty":"medium","question":"LASER stands for?","options":["Light Amplification by Stimulated Emission of Radiation","Light Absorption by Stimulated Emission","Light Amplification Radiation","None"],"answer":"Light Amplification by Stimulated Emission of Radiation"},
          {"id":232,"difficulty":"medium","question":"LASER light property?","options":["Coherent","Random","Incoherent","Diffuse"],"answer":"Coherent"},
          {"id":233,"difficulty":"hard","question":"Population inversion used in?","options":["LASER","LED","Bulb","Heater"],"answer":"LASER"},

          {"id":234,"difficulty":"easy","question":"LED works on principle of?","options":["Electroluminescence","Reflection","Diffraction","Polarization"],"answer":"Electroluminescence"},
          {"id":235,"difficulty":"medium","question":"Semiconductor with equal electrons and holes?","options":["Intrinsic","Extrinsic","p-type","n-type"],"answer":"Intrinsic"},
          {"id":236,"difficulty":"medium","question":"p-type semiconductor doped with?","options":["Trivalent impurity","Pentavalent","Metal","Gas"],"answer":"Trivalent impurity"},
          {"id":237,"difficulty":"hard","question":"n-type semiconductor doped with?","options":["Pentavalent impurity","Trivalent","Metal","Gas"],"answer":"Pentavalent impurity"},

          {"id":238,"difficulty":"easy","question":"Unit of photon momentum?","options":["kg m/s","J","W","N"],"answer":"kg m/s"},
          {"id":239,"difficulty":"medium","question":"Momentum of photon formula?","options":["h/λ","hv","mc²","mv"],"answer":"h/λ"},
          {"id":240,"difficulty":"medium","question":"Compton effect proves?","options":["Particle nature of light","Wave nature","Reflection","Diffraction"],"answer":"Particle nature of light"},
          {"id":241,"difficulty":"hard","question":"Compton wavelength shift depends on?","options":["Scattering angle","Intensity","Temperature","Pressure"],"answer":"Scattering angle"},

          {"id":242,"difficulty":"easy","question":"Photoelectric current depends on?","options":["Intensity","Frequency","Mass","Velocity"],"answer":"Intensity"},
          {"id":243,"difficulty":"medium","question":"Threshold frequency depends on?","options":["Metal surface","Intensity","Voltage","Distance"],"answer":"Metal surface"},
          {"id":244,"difficulty":"medium","question":"Work function unit?","options":["eV","J","W","N"],"answer":"eV"},
          {"id":245,"difficulty":"hard","question":"Stopping potential measures?","options":["Maximum KE of electrons","Voltage","Current","Energy loss"],"answer":"Maximum KE of electrons"},

          {"id":246,"difficulty":"easy","question":"Optical fiber works on?","options":["Total internal reflection","Reflection","Refraction","Diffraction"],"answer":"Total internal reflection"},
          {"id":247,"difficulty":"medium","question":"Numerical aperture relates to?","options":["Light acceptance","Energy","Heat","Pressure"],"answer":"Light acceptance"},
          {"id":248,"difficulty":"medium","question":"Core of optical fiber has?","options":["Higher refractive index","Lower refractive index","Same index","Zero index"],"answer":"Higher refractive index"}
        ]
      }
    ]
  },
  {
    "subject": "Chemistry",
    "topics": [
      {
        "name": "Physical Chemistry",
        "questions": [
          {"id":249,"difficulty":"easy","question":"Avogadro number value?","options":["6.022e23","6.022e22","1.6e-19","3e8"],"answer":"6.022e23"},
          {"id":250,"difficulty":"easy","question":"pH of pure water?","options":["0","7","14","1"],"answer":"7"},
          {"id":251,"difficulty":"easy","question":"Unit of Rate Constant for zero order reaction?","options":["s-1","mol L-1 s-1","L mol-1 s-1","None"],"answer":"mol L-1 s-1"},
          {"id":252,"difficulty":"easy","question":"Ideal gas equation?","options":["PV=nRT","P=VRT","PV=kT","V=nRT"],"answer":"PV=nRT"},
          {"id":253,"difficulty":"medium","question":"Which concentration term depends on temperature?","options":["Molality","Molarity","Mole fraction","Weight %"],"answer":"Molarity"},
          {"id":254,"difficulty":"medium","question":"Entropy of universe is always?","options":["Decreasing","Constant","Increasing","Zero"],"answer":"Increasing"},
          {"id":255,"difficulty":"medium","question":"Highest electron affinity among halogens?","options":["F","Cl","Br","I"],"answer":"Cl"},
          {"id":256,"difficulty":"medium","question":"For a spontaneous reaction ΔG is?","options":["+ve","Zero","-ve","1"],"answer":"-ve"},
          {"id":257,"difficulty":"hard","question":"Order of reaction can be?","options":["Fractional","Integer","Zero","All of these"],"answer":"All of these"},
          {"id":258,"difficulty":"hard","question":"Henry's law relates solubility of gas with?","options":["Temperature","Pressure","Both","None"],"answer":"Both"},

          {"id":259,"difficulty":"easy","question":"Gas constant value?","options":["8.314","1.38","6.022","9.8"],"answer":"8.314"},
          {"id":260,"difficulty":"easy","question":"Unit of pressure?","options":["Pascal","Newton","Joule","Watt"],"answer":"Pascal"},
          {"id":261,"difficulty":"medium","question":"Van’t Hoff factor relates to?","options":["Colligative properties","Electronegativity","Bond energy","Catalysis"],"answer":"Colligative properties"},
          {"id":262,"difficulty":"medium","question":"Osmotic pressure formula?","options":["π = iMRT","π = MRT","π = iRT","π = MR"],"answer":"π = iMRT"},
          {"id":263,"difficulty":"medium","question":"Freezing point depression formula?","options":["ΔTf = iKf m","ΔTf = Km","ΔTf = im","ΔTf = Kf"],"answer":"ΔTf = iKf m"},
          {"id":264,"difficulty":"hard","question":"Boiling point elevation formula?","options":["ΔTb = iKb m","ΔTb = Kb","ΔTb = im","ΔTb = m"],"answer":"ΔTb = iKb m"},

          {"id":265,"difficulty":"easy","question":"Unit of molality?","options":["mol/kg","mol/L","g/mol","kg/mol"],"answer":"mol/kg"},
          {"id":266,"difficulty":"medium","question":"Colligative properties depend on?","options":["Number of particles","Nature of solute","Temperature only","Pressure"],"answer":"Number of particles"},
          {"id":267,"difficulty":"medium","question":"Raoult's law relates vapour pressure with?","options":["Mole fraction","Mass","Volume","Density"],"answer":"Mole fraction"},
          {"id":268,"difficulty":"hard","question":"Deviation from Raoult's law occurs due to?","options":["Intermolecular forces","Pressure","Volume","Temperature only"],"answer":"Intermolecular forces"},

          {"id":269,"difficulty":"easy","question":"Unit of rate of reaction?","options":["mol L-1 s-1","s-1","mol","L"],"answer":"mol L-1 s-1"},
          {"id":270,"difficulty":"medium","question":"Half life of first order reaction?","options":["0.693/k","1/k","k/2","k"],"answer":"0.693/k"},
          {"id":271,"difficulty":"medium","question":"Rate constant unit for first order reaction?","options":["s-1","mol L-1 s-1","L mol-1 s-1","mol"],"answer":"s-1"},
          {"id":272,"difficulty":"hard","question":"Arrhenius equation relates rate constant with?","options":["Temperature","Pressure","Volume","Density"],"answer":"Temperature"},

          {"id":273,"difficulty":"easy","question":"Catalyst affects?","options":["Activation energy","ΔH","ΔG","Equilibrium constant"],"answer":"Activation energy"},
          {"id":274,"difficulty":"medium","question":"Activation energy symbol?","options":["Ea","ΔH","ΔG","S"],"answer":"Ea"},
          {"id":275,"difficulty":"medium","question":"Collision theory relates reaction rate with?","options":["Effective collisions","Mass","Pressure","Volume"],"answer":"Effective collisions"},

          {"id":276,"difficulty":"easy","question":"Unit of entropy?","options":["J/K","J","K","W"],"answer":"J/K"},
          {"id":277,"difficulty":"medium","question":"ΔH negative indicates reaction is?","options":["Exothermic","Endothermic","Neutral","Adiabatic"],"answer":"Exothermic"},
          {"id":278,"difficulty":"medium","question":"ΔH positive indicates reaction is?","options":["Endothermic","Exothermic","Neutral","Spontaneous"],"answer":"Endothermic"},
          {"id":279,"difficulty":"hard","question":"Relation between ΔG, ΔH and ΔS?","options":["ΔG = ΔH − TΔS","ΔG = ΔH + TΔS","ΔG = TΔS","ΔG = ΔH"],"answer":"ΔG = ΔH − TΔS"},

          {"id":280,"difficulty":"easy","question":"Standard temperature in thermodynamics?","options":["298 K","273 K","300 K","100 K"],"answer":"298 K"},
          {"id":281,"difficulty":"medium","question":"Standard pressure?","options":["1 atm","2 atm","10 atm","100 atm"],"answer":"1 atm"},
          {"id":282,"difficulty":"medium","question":"Gibbs free energy unit?","options":["J","K","Pa","mol"],"answer":"J"},

          {"id":283,"difficulty":"easy","question":"Electrochemistry studies?","options":["Electricity from chemical reactions","Heat","Light","Magnetism"],"answer":"Electricity from chemical reactions"},
          {"id":284,"difficulty":"medium","question":"Unit of emf?","options":["Volt","Ampere","Ohm","Watt"],"answer":"Volt"},
          {"id":285,"difficulty":"medium","question":"Standard electrode potential symbol?","options":["E°","V°","R°","P°"],"answer":"E°"},
          {"id":286,"difficulty":"hard","question":"Nernst equation relates potential with?","options":["Concentration","Pressure","Temperature only","Mass"],"answer":"Concentration"},

          {"id":287,"difficulty":"easy","question":"Faraday constant value?","options":["96500 C/mol","965 C/mol","9650 C/mol","965000 C/mol"],"answer":"96500 C/mol"},
          {"id":288,"difficulty":"medium","question":"Electrolysis governed by?","options":["Faraday laws","Newton laws","Boyle law","Ohm law"],"answer":"Faraday laws"},
          {"id":289,"difficulty":"medium","question":"Cathode is site of?","options":["Reduction","Oxidation","Neutralization","Hydrolysis"],"answer":"Reduction"},
          {"id":290,"difficulty":"medium","question":"Anode is site of?","options":["Oxidation","Reduction","Hydrolysis","Neutralization"],"answer":"Oxidation"},

          {"id":291,"difficulty":"easy","question":"Conductance unit?","options":["Siemens","Ohm","Volt","Ampere"],"answer":"Siemens"},
          {"id":292,"difficulty":"medium","question":"Conductivity symbol?","options":["κ","ρ","μ","λ"],"answer":"κ"},
          {"id":293,"difficulty":"medium","question":"Molar conductivity unit?","options":["S cm2 mol-1","S cm","S mol","cm mol"],"answer":"S cm2 mol-1"},

          {"id":294,"difficulty":"hard","question":"Kohlrausch law relates to?","options":["Molar conductivity at infinite dilution","Pressure","Volume","Temperature"],"answer":"Molar conductivity at infinite dilution"},

          {"id":295,"difficulty":"easy","question":"pH formula?","options":["-log[H+]","log[H+]","1/[H+]","[H+]"],"answer":"-log[H+]"},
          {"id":296,"difficulty":"medium","question":"pOH formula?","options":["-log[OH-]","log[OH-]","[OH-]","1/[OH-]"],"answer":"-log[OH-]"},
          {"id":297,"difficulty":"medium","question":"Relation between pH and pOH?","options":["pH + pOH = 14","pH = pOH","pH − pOH = 14","pH × pOH = 14"],"answer":"pH + pOH = 14"},

          {"id":298,"difficulty":"easy","question":"Strong acid example?","options":["HCl","CH3COOH","H2CO3","HF"],"answer":"HCl"},
          {"id":299,"difficulty":"medium","question":"Strong base example?","options":["NaOH","NH4OH","Al(OH)3","Fe(OH)3"],"answer":"NaOH"},

          {"id":300,"difficulty":"medium","question":"Buffer solution resists change in?","options":["pH","Temperature","Volume","Pressure"],"answer":"pH"},
          {"id":301,"difficulty":"hard","question":"Henderson–Hasselbalch equation relates?","options":["pH with pKa","Pressure","Temperature","Volume"],"answer":"pH with pKa"},

          {"id":302,"difficulty":"easy","question":"Surface tension unit?","options":["N/m","N","Pa","J"],"answer":"N/m"},
          {"id":303,"difficulty":"medium","question":"Adsorption occurs on?","options":["Surface","Bulk","Volume","Gas"],"answer":"Surface"},
          {"id":304,"difficulty":"medium","question":"Langmuir adsorption isotherm relates adsorption with?","options":["Pressure","Volume","Mass","Temperature"],"answer":"Pressure"},
          {"id":305,"difficulty":"hard","question":"Catalysis increases rate by lowering?","options":["Activation energy","ΔG","ΔH","Entropy"],"answer":"Activation energy"},

          {"id":306,"difficulty":"easy","question":"Unit of molarity?","options":["mol/L","mol/kg","g/mol","kg/mol"],"answer":"mol/L"},
          {"id":307,"difficulty":"medium","question":"Ideal solution obeys?","options":["Raoult's law","Henry law","Boyle law","Charles law"],"answer":"Raoult's law"},
          {"id":308,"difficulty":"medium","question":"Henry's law constant depends on?","options":["Temperature","Mass","Volume","Density"],"answer":"Temperature"},
          {"id":309,"difficulty":"hard","question":"Spontaneous reaction condition?","options":["ΔG < 0","ΔG > 0","ΔG = 0","ΔH = 0"],"answer":"ΔG < 0"},
          {"id":310,"difficulty":"medium","question":"Standard Gibbs free energy change relates to equilibrium constant by?","options":["ΔG° = -RT lnK","ΔG° = RT lnK","ΔG° = RT/K","ΔG° = KRT"],"answer":"ΔG° = -RT lnK"}
        ]
      },
      {
        "name": "Organic Chemistry",
        "questions": [
          {"id":311,"difficulty":"easy","question":"Simplest alkane?","options":["Ethane","Methane","Propane","Butane"],"answer":"Methane"},
          {"id":312,"difficulty":"easy","question":"General formula of alkanes?","options":["CnH2n+2","CnH2n","CnH2n-2","CnHn"],"answer":"CnH2n+2"},
          {"id":313,"difficulty":"easy","question":"Functional group of alcohol?","options":["-OH","-CHO","-COOH","-NH2"],"answer":"-OH"},
          {"id":314,"difficulty":"easy","question":"Hybridization of carbon in methane?","options":["sp3","sp2","sp","dsp2"],"answer":"sp3"},
          {"id":315,"difficulty":"medium","question":"IUPAC name of CH3OH?","options":["Methanol","Ethanol","Propanol","Butanol"],"answer":"Methanol"},

          {"id":316,"difficulty":"medium","question":"Functional group of aldehydes?","options":["-CHO","-COOH","-OH","-CN"],"answer":"-CHO"},
          {"id":317,"difficulty":"medium","question":"Functional group of carboxylic acids?","options":["-COOH","-CHO","-OH","-CO"],"answer":"-COOH"},
          {"id":318,"difficulty":"easy","question":"Example of aromatic compound?","options":["Benzene","Ethane","Methanol","Acetone"],"answer":"Benzene"},
          {"id":319,"difficulty":"medium","question":"Hybridization of carbon in ethene?","options":["sp2","sp3","sp","sp3d"],"answer":"sp2"},
          {"id":320,"difficulty":"medium","question":"Hybridization of carbon in ethyne?","options":["sp","sp2","sp3","dsp2"],"answer":"sp"},

          {"id":321,"difficulty":"easy","question":"Number of sigma bonds in ethene?","options":["5","4","6","3"],"answer":"5"},
          {"id":322,"difficulty":"medium","question":"Number of π bonds in ethyne?","options":["2","1","3","0"],"answer":"2"},
          {"id":323,"difficulty":"medium","question":"Isomerism due to different arrangement of atoms?","options":["Structural isomerism","Optical","Geometrical","Metamerism"],"answer":"Structural isomerism"},
          {"id":324,"difficulty":"hard","question":"Geometrical isomerism occurs due to?","options":["Restricted rotation","Free rotation","Ionization","Hybridization"],"answer":"Restricted rotation"},

          {"id":325,"difficulty":"easy","question":"Example of alcohol?","options":["Ethanol","Ethane","Ethene","Ethyne"],"answer":"Ethanol"},
          {"id":326,"difficulty":"medium","question":"Lucas test is used for?","options":["Alcohol classification","Ketone test","Aldehyde test","Carboxylic acid test"],"answer":"Alcohol classification"},
          {"id":327,"difficulty":"medium","question":"Tollens test detects?","options":["Aldehydes","Ketones","Alcohols","Ethers"],"answer":"Aldehydes"},
          {"id":328,"difficulty":"medium","question":"Fehling solution detects?","options":["Aldehydes","Ketones","Ethers","Alkanes"],"answer":"Aldehydes"},

          {"id":329,"difficulty":"hard","question":"Markovnikov rule applies to?","options":["Addition reactions","Substitution reactions","Elimination reactions","Polymerization"],"answer":"Addition reactions"},
          {"id":330,"difficulty":"medium","question":"Anti‑Markovnikov addition occurs in presence of?","options":["Peroxide","Acid","Base","Catalyst"],"answer":"Peroxide"},

          {"id":331,"difficulty":"easy","question":"Functional group of ketone?","options":[">C=O","-COOH","-CHO","-OH"],"answer":">C=O"},
          {"id":332,"difficulty":"medium","question":"Example of ketone?","options":["Acetone","Ethanol","Methanol","Formic acid"],"answer":"Acetone"},
          {"id":333,"difficulty":"medium","question":"Primary alcohol oxidation gives?","options":["Aldehyde","Ketone","Ether","Alkane"],"answer":"Aldehyde"},
          {"id":334,"difficulty":"hard","question":"Secondary alcohol oxidation gives?","options":["Ketone","Aldehyde","Acid","Alkane"],"answer":"Ketone"},

          {"id":335,"difficulty":"easy","question":"Carboxylic acids are?","options":["Weak acids","Strong acids","Neutral","Bases"],"answer":"Weak acids"},
          {"id":336,"difficulty":"medium","question":"Acetic acid formula?","options":["CH3COOH","HCOOH","C2H5OH","CH3CHO"],"answer":"CH3COOH"},
          {"id":337,"difficulty":"medium","question":"Esterification reaction produces?","options":["Ester","Alcohol","Ketone","Ether"],"answer":"Ester"},
          {"id":338,"difficulty":"hard","question":"Reagent used in esterification?","options":["Conc H2SO4","NaOH","HCl","NH3"],"answer":"Conc H2SO4"},

          {"id":339,"difficulty":"easy","question":"Functional group of amine?","options":["-NH2","-OH","-COOH","-CHO"],"answer":"-NH2"},
          {"id":340,"difficulty":"medium","question":"Aromatic amine example?","options":["Aniline","Methanol","Acetone","Propane"],"answer":"Aniline"},
          {"id":341,"difficulty":"medium","question":"Hoffmann bromamide reaction gives?","options":["Primary amine","Secondary amine","Alcohol","Ketone"],"answer":"Primary amine"},
          {"id":342,"difficulty":"hard","question":"Diazotization occurs with?","options":["Primary aromatic amine","Alcohol","Ketone","Ether"],"answer":"Primary aromatic amine"},

          {"id":343,"difficulty":"easy","question":"Functional group of ether?","options":["R-O-R","-OH","-CHO","-COOH"],"answer":"R-O-R"},
          {"id":344,"difficulty":"medium","question":"Williamson synthesis produces?","options":["Ether","Alcohol","Ketone","Acid"],"answer":"Ether"},

          {"id":345,"difficulty":"medium","question":"Polymer of ethene?","options":["Polyethylene","PVC","Nylon","Teflon"],"answer":"Polyethylene"},
          {"id":346,"difficulty":"medium","question":"Monomer of PVC?","options":["Vinyl chloride","Ethene","Styrene","Isoprene"],"answer":"Vinyl chloride"},
          {"id":347,"difficulty":"hard","question":"Monomer of nylon‑6,6?","options":["Adipic acid & hexamethylene diamine","Ethene","Propene","Butadiene"],"answer":"Adipic acid & hexamethylene diamine"},

          {"id":348,"difficulty":"easy","question":"Example of alkene?","options":["Ethene","Ethane","Ethyne","Methane"],"answer":"Ethene"},
          {"id":349,"difficulty":"medium","question":"Alkenes undergo mainly?","options":["Addition reactions","Substitution","Elimination","Oxidation"],"answer":"Addition reactions"},
          {"id":350,"difficulty":"medium","question":"Alkanes undergo mainly?","options":["Substitution reactions","Addition","Elimination","Oxidation"],"answer":"Substitution reactions"},

          {"id":351,"difficulty":"easy","question":"Example of alkyne?","options":["Ethyne","Ethane","Ethene","Methanol"],"answer":"Ethyne"},
          {"id":352,"difficulty":"medium","question":"Acidity of terminal alkynes due to?","options":["sp hybridization","sp2","sp3","None"],"answer":"sp hybridization"},

          {"id":353,"difficulty":"medium","question":"Benzene ring electrons?","options":["6 π electrons","4 π electrons","2 π electrons","8 π electrons"],"answer":"6 π electrons"},
          {"id":354,"difficulty":"hard","question":"Hückel rule states aromatic compounds have?","options":["(4n+2) π electrons","4n π electrons","2n electrons","n electrons"],"answer":"(4n+2) π electrons"},

          {"id":355,"difficulty":"easy","question":"Example of haloalkane?","options":["CH3Cl","CH3OH","CH4","C2H4"],"answer":"CH3Cl"},
          {"id":356,"difficulty":"medium","question":"SN1 reaction depends on?","options":["Substrate","Nucleophile","Solvent","Temperature"],"answer":"Substrate"},
          {"id":357,"difficulty":"medium","question":"SN2 reaction depends on?","options":["Substrate and nucleophile","Solvent","Temperature","Pressure"],"answer":"Substrate and nucleophile"},
          {"id":358,"difficulty":"hard","question":"Carbocation stability order?","options":["3° > 2° > 1°","1° > 2° > 3°","2° > 3° > 1°","1° > 3° > 2°"],"answer":"3° > 2° > 1°"},

          {"id":359,"difficulty":"easy","question":"Example of phenol?","options":["C6H5OH","CH3OH","C2H5OH","HCOOH"],"answer":"C6H5OH"},
          {"id":360,"difficulty":"medium","question":"Phenol is acidic due to?","options":["Resonance stabilization","Inductive effect","Mass","Hybridization"],"answer":"Resonance stabilization"},

          {"id":361,"difficulty":"medium","question":"Reimer–Tiemann reaction forms?","options":["Salicylaldehyde","Phenol","Aniline","Benzene"],"answer":"Salicylaldehyde"},
          {"id":362,"difficulty":"hard","question":"Kolbe reaction involves?","options":["Phenol + CO2","Alcohol + CO2","Ether + CO2","Ketone + CO2"],"answer":"Phenol + CO2"},

          {"id":363,"difficulty":"easy","question":"Reducing sugar example?","options":["Glucose","Sucrose","Cellulose","Starch"],"answer":"Glucose"},
          {"id":364,"difficulty":"medium","question":"Non‑reducing sugar?","options":["Sucrose","Glucose","Fructose","Maltose"],"answer":"Sucrose"},
          {"id":365,"difficulty":"medium","question":"Monomer of proteins?","options":["Amino acids","Glucose","Fatty acids","Nucleotides"],"answer":"Amino acids"},
          {"id":366,"difficulty":"hard","question":"Peptide bond forms between?","options":["Two amino acids","Two sugars","Two acids","Two alcohols"],"answer":"Two amino acids"},

          {"id":367,"difficulty":"easy","question":"DNA sugar?","options":["Deoxyribose","Ribose","Glucose","Fructose"],"answer":"Deoxyribose"},
          {"id":368,"difficulty":"medium","question":"RNA sugar?","options":["Ribose","Deoxyribose","Glucose","Maltose"],"answer":"Ribose"},
          {"id":369,"difficulty":"medium","question":"DNA bases include?","options":["A,T,G,C","A,U,G,C","A,T,U,C","G,T,U,C"],"answer":"A,T,G,C"},
          {"id":370,"difficulty":"hard","question":"RNA contains which base instead of thymine?","options":["Uracil","Cytosine","Guanine","Adenine"],"answer":"Uracil"},

          {"id":371,"difficulty":"medium","question":"Biopolymer example?","options":["Protein","Polyethylene","PVC","Teflon"],"answer":"Protein"},
          {"id":372,"difficulty":"medium","question":"Isoprene is monomer of?","options":["Natural rubber","PVC","Nylon","Teflon"],"answer":"Natural rubber"}
        ]
      },
      {
        "name": "Inorganic Chemistry",
        "questions": [
          {"id":373,"difficulty":"easy","question":"Most electronegative element?","options":["O","F","Cl","N"],"answer":"F"},
          {"id":374,"difficulty":"easy","question":"Group 18 elements are called?","options":["Halogens","Noble gases","Alkali metals","Chalcogens"],"answer":"Noble gases"},
          {"id":375,"difficulty":"easy","question":"Shape of PCl5?","options":["Octahedral","Trigonal bipyramidal","Tetrahedral","Square planar"],"answer":"Trigonal bipyramidal"},
          {"id":376,"difficulty":"easy","question":"Atomic number of oxygen?","options":["6","7","8","9"],"answer":"8"},
          {"id":377,"difficulty":"easy","question":"Element with highest electronegativity?","options":["F","Cl","O","N"],"answer":"F"},

          {"id":378,"difficulty":"medium","question":"Bond order of O2?","options":["1","2","3","1.5"],"answer":"2"},
          {"id":379,"difficulty":"medium","question":"Paramagnetism of O2 explained by?","options":["VBT","MOT","VSEPR","CFT"],"answer":"MOT"},
          {"id":380,"difficulty":"medium","question":"Which element is not transition metal?","options":["Fe","Cu","Zn","Cr"],"answer":"Zn"},
          {"id":381,"difficulty":"medium","question":"Oxidation state of Cr in K2Cr2O7?","options":["+3","+6","+7","+2"],"answer":"+6"},
          {"id":382,"difficulty":"medium","question":"Common oxidation state of alkali metals?","options":["+1","+2","+3","+4"],"answer":"+1"},

          {"id":383,"difficulty":"hard","question":"Shape of XeF4?","options":["Tetrahedral","Square planar","Octahedral","Trigonal planar"],"answer":"Square planar"},
          {"id":384,"difficulty":"hard","question":"Inert pair effect prominent in?","options":["B","Al","Ga","Tl"],"answer":"Tl"},
          {"id":385,"difficulty":"hard","question":"Hybridization in SF6?","options":["sp3","sp3d","sp3d2","sp2"],"answer":"sp3d2"},

          {"id":386,"difficulty":"easy","question":"Group number of halogens?","options":["16","17","18","15"],"answer":"17"},
          {"id":387,"difficulty":"easy","question":"Lightest noble gas?","options":["He","Ne","Ar","Kr"],"answer":"He"},
          {"id":388,"difficulty":"medium","question":"Acidic oxide example?","options":["SO2","Na2O","CaO","MgO"],"answer":"SO2"},
          {"id":389,"difficulty":"medium","question":"Basic oxide example?","options":["Na2O","SO2","CO2","NO2"],"answer":"Na2O"},
          {"id":390,"difficulty":"medium","question":"Amphoteric oxide example?","options":["Al2O3","Na2O","CO2","SO3"],"answer":"Al2O3"},

          {"id":391,"difficulty":"medium","question":"Central metal in chlorophyll?","options":["Fe","Mg","Zn","Cu"],"answer":"Mg"},
          {"id":392,"difficulty":"easy","question":"Metal in hemoglobin?","options":["Fe","Mg","Cu","Zn"],"answer":"Fe"},
          {"id":393,"difficulty":"medium","question":"d-block elements are also called?","options":["Transition elements","Representative","Lanthanides","Actinides"],"answer":"Transition elements"},
          {"id":394,"difficulty":"medium","question":"Highest oxidation state of Mn?","options":["+5","+6","+7","+4"],"answer":"+7"},

          {"id":395,"difficulty":"hard","question":"Crystal field splitting occurs in?","options":["d orbitals","p orbitals","s orbitals","f orbitals"],"answer":"d orbitals"},
          {"id":396,"difficulty":"medium","question":"Ligand donating two electrons?","options":["Lewis base","Lewis acid","Salt","Acid"],"answer":"Lewis base"},
          {"id":397,"difficulty":"medium","question":"Coordination number in [Co(NH3)6]3+?","options":["4","5","6","3"],"answer":"6"},
          {"id":398,"difficulty":"hard","question":"Type of ligand NH3?","options":["Neutral","Anionic","Cationic","Complex"],"answer":"Neutral"},

          {"id":399,"difficulty":"easy","question":"Atomic radius increases down group because?","options":["New shells added","Higher charge","Lower electrons","None"],"answer":"New shells added"},
          {"id":400,"difficulty":"medium","question":"Ionization energy increases across period because?","options":["Higher nuclear charge","More shells","Less electrons","None"],"answer":"Higher nuclear charge"},

          {"id":401,"difficulty":"easy","question":"Most abundant metal in earth crust?","options":["Al","Fe","Ca","Na"],"answer":"Al"},
          {"id":402,"difficulty":"medium","question":"Ore of aluminium?","options":["Bauxite","Hematite","Galena","Malachite"],"answer":"Bauxite"},
          {"id":403,"difficulty":"medium","question":"Ore of iron?","options":["Hematite","Bauxite","Galena","Siderite"],"answer":"Hematite"},
          {"id":404,"difficulty":"medium","question":"Ore of copper?","options":["Malachite","Bauxite","Hematite","Calcite"],"answer":"Malachite"},

          {"id":405,"difficulty":"hard","question":"Hall‑Héroult process used for?","options":["Aluminium extraction","Iron extraction","Copper extraction","Zinc extraction"],"answer":"Aluminium extraction"},
          {"id":406,"difficulty":"hard","question":"Blast furnace used for?","options":["Iron extraction","Aluminium extraction","Copper extraction","Gold extraction"],"answer":"Iron extraction"},

          {"id":407,"difficulty":"easy","question":"Valency of sodium?","options":["1","2","3","4"],"answer":"1"},
          {"id":408,"difficulty":"easy","question":"Valency of oxygen?","options":["2","1","3","4"],"answer":"2"},
          {"id":409,"difficulty":"medium","question":"p-block elements occupy?","options":["Groups 13‑18","Groups 1‑2","Groups 3‑12","Lanthanides"],"answer":"Groups 13‑18"},

          {"id":410,"difficulty":"medium","question":"Hard water contains?","options":["Ca2+ and Mg2+","Na+","K+","Fe3+"],"answer":"Ca2+ and Mg2+"},
          {"id":411,"difficulty":"medium","question":"Permanent hardness removed by?","options":["Washing soda","Boiling","Filtration","Distillation"],"answer":"Washing soda"},

          {"id":412,"difficulty":"hard","question":"ZSM‑5 catalyst used in?","options":["Petroleum cracking","Electrolysis","Distillation","Polymerization"],"answer":"Petroleum cracking"},
          {"id":413,"difficulty":"medium","question":"Oxidation number of N in NH3?","options":["-3","+3","+5","0"],"answer":"-3"},
          {"id":414,"difficulty":"medium","question":"Oxidation number of S in H2SO4?","options":["+6","+4","+2","0"],"answer":"+6"},

          {"id":415,"difficulty":"easy","question":"Atomic number of sodium?","options":["11","12","13","10"],"answer":"11"},
          {"id":416,"difficulty":"easy","question":"Atomic number of chlorine?","options":["17","16","18","19"],"answer":"17"},

          {"id":417,"difficulty":"medium","question":"Color of CuSO4 crystals?","options":["Blue","Green","White","Red"],"answer":"Blue"},
          {"id":418,"difficulty":"medium","question":"Color of KMnO4 solution?","options":["Purple","Blue","Red","Green"],"answer":"Purple"},

          {"id":419,"difficulty":"hard","question":"Magnetic property of Fe3+?","options":["Paramagnetic","Diamagnetic","Ferromagnetic","Antiferromagnetic"],"answer":"Paramagnetic"},
          {"id":420,"difficulty":"medium","question":"Metal used in galvanization?","options":["Zn","Cu","Fe","Al"],"answer":"Zn"},
          {"id":421,"difficulty":"medium","question":"Metal used in tin plating?","options":["Sn","Zn","Cu","Fe"],"answer":"Sn"},

          {"id":422,"difficulty":"easy","question":"Symbol of potassium?","options":["K","P","Pt","Po"],"answer":"K"},
          {"id":423,"difficulty":"easy","question":"Symbol of silver?","options":["Ag","Au","Al","As"],"answer":"Ag"},

          {"id":424,"difficulty":"medium","question":"Compound responsible for green flame test?","options":["Ba","Na","K","Ca"],"answer":"Ba"},
          {"id":425,"difficulty":"medium","question":"Compound responsible for yellow flame test?","options":["Na","K","Ca","Cu"],"answer":"Na"},

          {"id":426,"difficulty":"hard","question":"Ligand with two donor atoms?","options":["Bidentate","Monodentate","Tridentate","None"],"answer":"Bidentate"},
          {"id":427,"difficulty":"medium","question":"EDTA is example of?","options":["Hexadentate ligand","Bidentate ligand","Monodentate","None"],"answer":"Hexadentate ligand"},

          {"id":428,"difficulty":"easy","question":"Element liquid at room temperature?","options":["Hg","Na","Fe","Cu"],"answer":"Hg"},
          {"id":429,"difficulty":"medium","question":"Halogen with highest electronegativity?","options":["F","Cl","Br","I"],"answer":"F"},

          {"id":430,"difficulty":"medium","question":"Hydrogen bond strongest in?","options":["HF","HCl","HBr","HI"],"answer":"HF"},
          {"id":431,"difficulty":"medium","question":"Compound with hydrogen bonding?","options":["H2O","CO2","CH4","CCl4"],"answer":"H2O"},

          {"id":432,"difficulty":"hard","question":"Complex ion [Fe(CN)6]4- is?","options":["Hexacyanoferrate","Ferrocyanide","Ferricyanide","Ferrous complex"],"answer":"Ferrocyanide"},
          {"id":433,"difficulty":"medium","question":"Oxidation state of Fe in [Fe(CN)6]4-?","options":["+2","+3","+4","+1"],"answer":"+2"},
          {"id":434,"difficulty":"medium","question":"Oxidation state of Fe in [Fe(CN)6]3-?","options":["+3","+2","+4","+1"],"answer":"+3"}
        ]
      },
      {
        "name": "Applied and Biochem",
        "questions": [
          {"id":435,"difficulty":"easy","question":"Monomer of polyethylene?","options":["Ethene","Propene","Styrene","Vinyl chloride"],"answer":"Ethene"},
          {"id":436,"difficulty":"easy","question":"Water soluble vitamin?","options":["Vitamin C","Vitamin A","Vitamin D","Vitamin E"],"answer":"Vitamin C"},
          {"id":437,"difficulty":"easy","question":"Metal in chlorophyll?","options":["Mg","Fe","Zn","Cu"],"answer":"Mg"},
          {"id":438,"difficulty":"easy","question":"Protein found in hair?","options":["Keratin","Collagen","Albumin","Myosin"],"answer":"Keratin"},
          {"id":439,"difficulty":"medium","question":"Natural rubber monomer?","options":["Isoprene","Butadiene","Styrene","Chloroprene"],"answer":"Isoprene"},

          {"id":440,"difficulty":"medium","question":"Linkage in proteins?","options":["Peptide bond","Ester bond","Glycosidic bond","Phosphodiester"],"answer":"Peptide bond"},
          {"id":441,"difficulty":"medium","question":"Artificial sweetener?","options":["Aspartame","Glucose","Sucrose","Fructose"],"answer":"Aspartame"},
          {"id":442,"difficulty":"medium","question":"Non‑reducing sugar?","options":["Sucrose","Glucose","Fructose","Maltose"],"answer":"Sucrose"},

          {"id":443,"difficulty":"easy","question":"DNA base absent in RNA?","options":["Thymine","Adenine","Guanine","Cytosine"],"answer":"Thymine"},
          {"id":444,"difficulty":"medium","question":"RNA base replacing thymine?","options":["Uracil","Guanine","Cytosine","Adenine"],"answer":"Uracil"},

          {"id":445,"difficulty":"easy","question":"Building blocks of proteins?","options":["Amino acids","Nucleotides","Glucose","Fatty acids"],"answer":"Amino acids"},
          {"id":446,"difficulty":"medium","question":"Building blocks of DNA?","options":["Nucleotides","Amino acids","Sugars","Proteins"],"answer":"Nucleotides"},
          {"id":447,"difficulty":"medium","question":"Type of polymer starch?","options":["Polysaccharide","Protein","Lipid","Nucleic acid"],"answer":"Polysaccharide"},

          {"id":448,"difficulty":"medium","question":"Major energy storage molecule?","options":["ATP","DNA","RNA","NAD"],"answer":"ATP"},
          {"id":449,"difficulty":"medium","question":"Enzyme nature?","options":["Protein","Carbohydrate","Lipid","Vitamin"],"answer":"Protein"},
          {"id":450,"difficulty":"hard","question":"Enzyme catalyst works by lowering?","options":["Activation energy","Temperature","Pressure","Volume"],"answer":"Activation energy"},

          {"id":451,"difficulty":"easy","question":"Hormone for fruit ripening?","options":["Ethylene","Auxin","Gibberellin","Cytokinin"],"answer":"Ethylene"},
          {"id":452,"difficulty":"medium","question":"Vitamin responsible for blood clotting?","options":["Vitamin K","Vitamin A","Vitamin D","Vitamin C"],"answer":"Vitamin K"},
          {"id":453,"difficulty":"medium","question":"Vitamin for vision?","options":["Vitamin A","Vitamin B","Vitamin C","Vitamin D"],"answer":"Vitamin A"},

          {"id":454,"difficulty":"medium","question":"Main carbohydrate in blood?","options":["Glucose","Sucrose","Fructose","Lactose"],"answer":"Glucose"},
          {"id":455,"difficulty":"easy","question":"Structural polysaccharide in plants?","options":["Cellulose","Starch","Glycogen","Chitin"],"answer":"Cellulose"},
          {"id":456,"difficulty":"medium","question":"Storage carbohydrate in animals?","options":["Glycogen","Starch","Cellulose","Sucrose"],"answer":"Glycogen"},

          {"id":457,"difficulty":"medium","question":"Example of saturated fatty acid?","options":["Palmitic acid","Oleic acid","Linoleic acid","Linolenic acid"],"answer":"Palmitic acid"},
          {"id":458,"difficulty":"hard","question":"Unsaturated fats contain?","options":["Double bonds","Triple bonds","Single bonds","Ionic bonds"],"answer":"Double bonds"},

          {"id":459,"difficulty":"easy","question":"Polymer used in nonstick cookware?","options":["Teflon","PVC","Nylon","Bakelite"],"answer":"Teflon"},
          {"id":460,"difficulty":"medium","question":"Thermosetting plastic example?","options":["Bakelite","PVC","Polyethylene","Polystyrene"],"answer":"Bakelite"},

          {"id":461,"difficulty":"medium","question":"Biodegradable polymer example?","options":["PHBV","PVC","Teflon","Bakelite"],"answer":"PHBV"},
          {"id":462,"difficulty":"medium","question":"Nylon is example of?","options":["Polyamide","Polyester","Polyether","Polycarbonate"],"answer":"Polyamide"},

          {"id":463,"difficulty":"easy","question":"Soap obtained from reaction of fats with?","options":["NaOH","HCl","H2SO4","NH3"],"answer":"NaOH"},
          {"id":464,"difficulty":"medium","question":"Detergents differ from soaps because they work in?","options":["Hard water","Soft water","Only hot water","Only cold water"],"answer":"Hard water"},

          {"id":465,"difficulty":"medium","question":"Surfactants reduce?","options":["Surface tension","Density","Pressure","Viscosity"],"answer":"Surface tension"},
          {"id":466,"difficulty":"hard","question":"Micelle formation occurs above?","options":["CMC","Boiling point","Melting point","pH"],"answer":"CMC"},

          {"id":467,"difficulty":"easy","question":"Biocatalyst example?","options":["Enzyme","Acid","Base","Salt"],"answer":"Enzyme"},
          {"id":468,"difficulty":"medium","question":"Coenzyme example?","options":["NAD+","NaCl","HCl","NaOH"],"answer":"NAD+"},

          {"id":469,"difficulty":"medium","question":"Protein denaturation occurs due to?","options":["Heat","Cold","Pressure","Vacuum"],"answer":"Heat"},
          {"id":470,"difficulty":"medium","question":"Example of fibrous protein?","options":["Keratin","Hemoglobin","Insulin","Albumin"],"answer":"Keratin"},

          {"id":471,"difficulty":"easy","question":"Example of globular protein?","options":["Hemoglobin","Keratin","Collagen","Elastin"],"answer":"Hemoglobin"},
          {"id":472,"difficulty":"medium","question":"Hormone insulin controls?","options":["Blood glucose","Blood pressure","Heart rate","Respiration"],"answer":"Blood glucose"},

          {"id":473,"difficulty":"medium","question":"DNA double helix discovered by?","options":["Watson and Crick","Darwin","Mendel","Pasteur"],"answer":"Watson and Crick"},
          {"id":474,"difficulty":"hard","question":"DNA replication is?","options":["Semi‑conservative","Conservative","Dispersive","Random"],"answer":"Semi‑conservative"},

          {"id":475,"difficulty":"easy","question":"Genetic unit?","options":["Gene","Cell","Protein","Chromosome"],"answer":"Gene"},
          {"id":476,"difficulty":"medium","question":"Protein synthesis occurs in?","options":["Ribosome","Golgi","Nucleus","Lysosome"],"answer":"Ribosome"},

          {"id":477,"difficulty":"medium","question":"ATP contains how many phosphate groups?","options":["3","2","1","4"],"answer":"3"},
          {"id":478,"difficulty":"medium","question":"DNA replication enzyme?","options":["DNA polymerase","RNA polymerase","Ligase","Helicase"],"answer":"DNA polymerase"},

          {"id":479,"difficulty":"easy","question":"Example of hormone?","options":["Insulin","Glucose","Protein","Starch"],"answer":"Insulin"},
          {"id":480,"difficulty":"medium","question":"Hormone adrenaline secreted by?","options":["Adrenal gland","Pancreas","Thyroid","Pituitary"],"answer":"Adrenal gland"},

          {"id":481,"difficulty":"medium","question":"Protein digestion begins in?","options":["Stomach","Mouth","Small intestine","Large intestine"],"answer":"Stomach"},
          {"id":482,"difficulty":"medium","question":"Enzyme in saliva?","options":["Amylase","Pepsin","Trypsin","Lipase"],"answer":"Amylase"},

          {"id":483,"difficulty":"hard","question":"Photosynthesis enzyme?","options":["Rubisco","ATPase","Protease","Ligase"],"answer":"Rubisco"},
          {"id":484,"difficulty":"medium","question":"Primary product of photosynthesis?","options":["Glucose","Protein","Fat","Cellulose"],"answer":"Glucose"},

          {"id":485,"difficulty":"easy","question":"Biogas mainly contains?","options":["Methane","Ethane","Propane","Butane"],"answer":"Methane"},
          {"id":486,"difficulty":"medium","question":"Green chemistry aims to?","options":["Reduce pollution","Increase pollution","Increase waste","None"],"answer":"Reduce pollution"},

          {"id":487,"difficulty":"medium","question":"Biomolecules include?","options":["Carbohydrates","Proteins","Lipids","All of these"],"answer":"All of these"},
          {"id":488,"difficulty":"medium","question":"Essential amino acids obtained from?","options":["Diet","Synthesis","Sunlight","Water"],"answer":"Diet"},

          {"id":489,"difficulty":"hard","question":"Protein primary structure refers to?","options":["Amino acid sequence","Helix","Sheet","Folding"],"answer":"Amino acid sequence"},
          {"id":490,"difficulty":"medium","question":"Secondary protein structure example?","options":["Alpha helix","DNA","ATP","Glucose"],"answer":"Alpha helix"},

          {"id":491,"difficulty":"medium","question":"Example of nucleic acid?","options":["DNA","Protein","Carbohydrate","Fat"],"answer":"DNA"},
          {"id":492,"difficulty":"easy","question":"RNA stands for?","options":["Ribonucleic acid","Random nucleic acid","Reactive nucleic acid","None"],"answer":"Ribonucleic acid"},

          {"id":493,"difficulty":"medium","question":"Genetic material in most organisms?","options":["DNA","RNA","Protein","Carbohydrate"],"answer":"DNA"},
          {"id":494,"difficulty":"medium","question":"RNA mainly involved in?","options":["Protein synthesis","Respiration","Digestion","Circulation"],"answer":"Protein synthesis"},

          {"id":495,"difficulty":"hard","question":"Central dogma involves?","options":["DNA→RNA→Protein","RNA→DNA","Protein→DNA","DNA→Protein"],"answer":"DNA→RNA→Protein"},
          {"id":496,"difficulty":"medium","question":"Example of biodegradable polymer?","options":["PHBV","PVC","Polystyrene","Teflon"],"answer":"PHBV"}
        ]
      }
    ]
  },
  {
    "subject": "Maths",
    "topics": [
      {
        "name": "Algebra",
        "questions": [
          {"id":497,"difficulty":"easy","question":"Sum of roots of ax^2+bx+c=0?","options":["-b/a","b/a","c/a","-c/a"],"answer":"-b/a"},
          {"id":498,"difficulty":"easy","question":"Product of roots of ax^2+bx+c=0?","options":["c/a","-b/a","b/a","a/c"],"answer":"c/a"},
          {"id":499,"difficulty":"easy","question":"Value of i^2?","options":["-1","1","i","0"],"answer":"-1"},
          {"id":500,"difficulty":"easy","question":"Value of i^4?","options":["1","-1","i","-i"],"answer":"1"},
          {"id":501,"difficulty":"medium","question":"Roots of x^2−5x+6=0?","options":["2,3","1,6","-2,-3","3,4"],"answer":"2,3"},
          {"id":502,"difficulty":"medium","question":"Discriminant formula?","options":["b^2−4ac","4ac−b^2","a^2−4bc","b^2+4ac"],"answer":"b^2−4ac"},
          {"id":503,"difficulty":"medium","question":"If D>0 roots are?","options":["Real and distinct","Equal","Imaginary","None"],"answer":"Real and distinct"},
          {"id":504,"difficulty":"medium","question":"If D=0 roots are?","options":["Equal","Distinct","Imaginary","None"],"answer":"Equal"},
          {"id":505,"difficulty":"hard","question":"If D<0 roots are?","options":["Imaginary","Real","Equal","Rational"],"answer":"Imaginary"},

          {"id":506,"difficulty":"easy","question":"10th term of AP 2,4,6..?","options":["20","18","22","24"],"answer":"20"},
          {"id":507,"difficulty":"easy","question":"Common difference of 5,8,11..?","options":["3","2","4","5"],"answer":"3"},
          {"id":508,"difficulty":"medium","question":"Sum of first n terms of AP?","options":["n/2[2a+(n−1)d]","na","nd","n^2"],"answer":"n/2[2a+(n−1)d]"},
          {"id":509,"difficulty":"medium","question":"Nth term of AP?","options":["a+(n−1)d","nd","an","a+d"],"answer":"a+(n−1)d"},

          {"id":510,"difficulty":"easy","question":"First term of GP 2,4,8..?","options":["2","4","8","1"],"answer":"2"},
          {"id":511,"difficulty":"easy","question":"Common ratio of 2,4,8..?","options":["2","4","1","3"],"answer":"2"},
          {"id":512,"difficulty":"medium","question":"Sum of infinite GP when |r|<1?","options":["a/(1−r)","a/(1+r)","ar","a+r"],"answer":"a/(1−r)"},

          {"id":513,"difficulty":"easy","question":"Value of 5!?","options":["120","60","20","10"],"answer":"120"},
          {"id":514,"difficulty":"medium","question":"nPr formula?","options":["n!/(n−r)!","n!/r!(n−r)!","n!r!","n/r"],"answer":"n!/(n−r)!"},
          {"id":515,"difficulty":"medium","question":"nCr formula?","options":["n!/r!(n−r)!","n!/(n−r)!","r!/n!","n!/r!"],"answer":"n!/r!(n−r)!"},
          {"id":516,"difficulty":"medium","question":"5C2 value?","options":["10","20","5","15"],"answer":"10"},
          {"id":517,"difficulty":"hard","question":"Number of permutations of word CAT?","options":["6","3","9","12"],"answer":"6"},

          {"id":518,"difficulty":"easy","question":"Sum of coefficients of (1+x)^n?","options":["2^n","n","n^2","2n"],"answer":"2^n"},
          {"id":519,"difficulty":"medium","question":"Middle term of binomial expansion depends on?","options":["n","x","coefficient","power"],"answer":"n"},
          {"id":520,"difficulty":"hard","question":"Coefficient of x in (1+x)^5?","options":["5","10","1","20"],"answer":"5"},

          {"id":521,"difficulty":"easy","question":"Determinant of [1 2;3 4]?","options":["-2","2","1","0"],"answer":"-2"},
          {"id":522,"difficulty":"medium","question":"If A is 2x2 matrix determinant gives?","options":["ad−bc","ab−cd","ac−bd","a+b"],"answer":"ad−bc"},
          {"id":523,"difficulty":"medium","question":"|kA| for 2×2 matrix?","options":["k^2|A|","k|A|","|A|","k^3|A|"],"answer":"k^2|A|"},
          {"id":524,"difficulty":"hard","question":"Determinant zero means?","options":["Singular matrix","Identity","Unit matrix","Diagonal"],"answer":"Singular matrix"},

          {"id":525,"difficulty":"easy","question":"Identity matrix property?","options":["AI=A","A=0","A=I","None"],"answer":"AI=A"},
          {"id":526,"difficulty":"medium","question":"Transpose of matrix changes?","options":["Rows to columns","Columns to rows","Both","None"],"answer":"Rows to columns"},
          {"id":527,"difficulty":"medium","question":"A+A equals?","options":["2A","A^2","A","0"],"answer":"2A"},

          {"id":528,"difficulty":"easy","question":"Log10 100?","options":["2","1","10","100"],"answer":"2"},
          {"id":529,"difficulty":"easy","question":"log a + log b equals?","options":["log(ab)","log(a+b)","log(a/b)","log(a^b)"],"answer":"log(ab)"},
          {"id":530,"difficulty":"medium","question":"log a − log b equals?","options":["log(a/b)","log(ab)","log(a+b)","log(b/a)"],"answer":"log(a/b)"},

          {"id":531,"difficulty":"medium","question":"If log10 x=2 then x=?","options":["100","10","2","20"],"answer":"100"},
          {"id":532,"difficulty":"hard","question":"log a^n equals?","options":["n log a","log an","a log n","n+a"],"answer":"n log a"},

          {"id":533,"difficulty":"easy","question":"Value of 2^5?","options":["32","16","25","64"],"answer":"32"},
          {"id":534,"difficulty":"medium","question":"2^x=8 gives x=?","options":["3","2","4","1"],"answer":"3"},
          {"id":535,"difficulty":"medium","question":"3^0 equals?","options":["1","0","3","-1"],"answer":"1"},

          {"id":536,"difficulty":"medium","question":"Inequality x^2>0 holds for?","options":["x≠0","x=0","All x","None"],"answer":"x≠0"},
          {"id":537,"difficulty":"hard","question":"Minimum value of x^2?","options":["0","1","-1","∞"],"answer":"0"},

          {"id":538,"difficulty":"easy","question":"|−5| equals?","options":["5","-5","0","1"],"answer":"5"},
          {"id":539,"difficulty":"medium","question":"|x| represents?","options":["Distance from 0","Negative value","Square","Cube"],"answer":"Distance from 0"},

          {"id":540,"difficulty":"medium","question":"If a=b then a^2−b^2=?","options":["0","1","a","b"],"answer":"0"},
          {"id":541,"difficulty":"hard","question":"Identity (a+b)^2=?","options":["a^2+2ab+b^2","a^2+b^2","2ab","a^2−b^2"],"answer":"a^2+2ab+b^2"},

          {"id":542,"difficulty":"easy","question":"Value of (a−b)^2?","options":["a^2−2ab+b^2","a^2+b^2","2ab","a^2−b^2"],"answer":"a^2−2ab+b^2"},
          {"id":543,"difficulty":"medium","question":"a^2−b^2 factorizes as?","options":["(a+b)(a−b)","(a−b)^2","(a+b)^2","None"],"answer":"(a+b)(a−b)"},

          {"id":544,"difficulty":"easy","question":"Value of 7+8?","options":["15","14","16","13"],"answer":"15"},
          {"id":545,"difficulty":"medium","question":"If x+y=10 and x=4 then y=?","options":["6","5","4","3"],"answer":"6"},
          {"id":546,"difficulty":"medium","question":"Solve x+5=9","options":["4","5","3","2"],"answer":"4"},

          {"id":547,"difficulty":"easy","question":"x−3=2 gives x?","options":["5","2","1","3"],"answer":"5"},
          {"id":548,"difficulty":"medium","question":"2x=10 gives x?","options":["5","2","4","3"],"answer":"5"},
          {"id":549,"difficulty":"medium","question":"x/2=4 gives x?","options":["8","6","4","2"],"answer":"8"},

          {"id":550,"difficulty":"hard","question":"Equation x^2=16 roots?","options":["±4","4","-4","±8"],"answer":"±4"},
          {"id":551,"difficulty":"easy","question":"Square of 12?","options":["144","124","132","156"],"answer":"144"},
          {"id":552,"difficulty":"medium","question":"Cube of 3?","options":["27","9","18","81"],"answer":"27"},
          {"id":553,"difficulty":"medium","question":"√81 equals?","options":["9","8","7","6"],"answer":"9"},
          {"id":554,"difficulty":"medium","question":"√49 equals?","options":["7","8","6","9"],"answer":"7"},
          {"id":555,"difficulty":"easy","question":"Value of 0! ?","options":["1","0","-1","Undefined"],"answer":"1"},
          {"id":556,"difficulty":"medium","question":"2! equals?","options":["2","4","1","3"],"answer":"2"},
          {"id":557,"difficulty":"medium","question":"3! equals?","options":["6","3","9","12"],"answer":"6"},
          {"id":558,"difficulty":"hard","question":"4! equals?","options":["24","12","16","20"],"answer":"24"}
        ]
      },
      {
        "name": "Calculus",
        "questions": [
          {"id":559,"difficulty":"easy","question":"d/dx(x^n)?","options":["nx^(n-1)","x^n","n^x","nx"],"answer":"nx^(n-1)"},
          {"id":560,"difficulty":"easy","question":"d/dx(sin x)?","options":["cos x","-cos x","sin x","-sin x"],"answer":"cos x"},
          {"id":561,"difficulty":"easy","question":"d/dx(cos x)?","options":["-sin x","sin x","cos x","tan x"],"answer":"-sin x"},
          {"id":562,"difficulty":"easy","question":"d/dx(e^x)?","options":["e^x","xe^x","1","x"],"answer":"e^x"},
          {"id":563,"difficulty":"medium","question":"d/dx(ln x)?","options":["1/x","x","ln x","e^x"],"answer":"1/x"},
          {"id":564,"difficulty":"medium","question":"d/dx(x^2)?","options":["2x","x","x^3","1"],"answer":"2x"},
          {"id":565,"difficulty":"medium","question":"d/dx(3x)?","options":["3","x","1","0"],"answer":"3"},
          {"id":566,"difficulty":"medium","question":"d/dx(constant)?","options":["0","1","x","∞"],"answer":"0"},

          {"id":567,"difficulty":"easy","question":"∫1 dx?","options":["x+C","1","0","x^2"],"answer":"x+C"},
          {"id":568,"difficulty":"easy","question":"∫x dx?","options":["x^2/2+C","x^2","x","2x"],"answer":"x^2/2+C"},
          {"id":569,"difficulty":"medium","question":"∫sin x dx?","options":["-cos x+C","cos x+C","sin x+C","tan x"],"answer":"-cos x+C"},
          {"id":570,"difficulty":"medium","question":"∫cos x dx?","options":["sin x+C","-sin x","cos x","tan x"],"answer":"sin x+C"},
          {"id":571,"difficulty":"medium","question":"∫1/x dx?","options":["ln x+C","x","1/x","e^x"],"answer":"ln x+C"},

          {"id":572,"difficulty":"easy","question":"Limit x→0 sinx/x?","options":["1","0","∞","-1"],"answer":"1"},
          {"id":573,"difficulty":"medium","question":"Limit x→0 (1−cosx)/x?","options":["0","1","∞","2"],"answer":"0"},
          {"id":574,"difficulty":"medium","question":"Limit x→1 x^2?","options":["1","2","0","Undefined"],"answer":"1"},

          {"id":575,"difficulty":"easy","question":"Slope of tangent equals?","options":["Derivative","Integral","Limit","Constant"],"answer":"Derivative"},
          {"id":576,"difficulty":"medium","question":"Area under curve found by?","options":["Integration","Differentiation","Limit","Algebra"],"answer":"Integration"},

          {"id":577,"difficulty":"medium","question":"d/dx(x^3)?","options":["3x^2","x^3","x^2","3x"],"answer":"3x^2"},
          {"id":578,"difficulty":"medium","question":"d/dx(tan x)?","options":["sec^2x","cos x","sin x","tan x"],"answer":"sec^2x"},
          {"id":579,"difficulty":"medium","question":"d/dx(sec x)?","options":["sec x tan x","tan x","sec x","sin x"],"answer":"sec x tan x"},
          {"id":580,"difficulty":"medium","question":"d/dx(cot x)?","options":["-csc^2x","csc^2x","sec^2x","tan x"],"answer":"-csc^2x"},

          {"id":581,"difficulty":"easy","question":"Integral of e^x?","options":["e^x+C","xe^x","ln x","1/x"],"answer":"e^x+C"},
          {"id":582,"difficulty":"medium","question":"Integral of 2x?","options":["x^2+C","2x^2","x","2"],"answer":"x^2+C"},
          {"id":583,"difficulty":"medium","question":"Integral of 3x^2?","options":["x^3+C","3x^3","x^2","6x"],"answer":"x^3+C"},

          {"id":584,"difficulty":"easy","question":"Derivative represents rate of?","options":["Change","Area","Volume","Mass"],"answer":"Change"},
          {"id":585,"difficulty":"medium","question":"Maximum occurs when derivative=?","options":["0","1","∞","2"],"answer":"0"},
          {"id":586,"difficulty":"medium","question":"Minimum occurs when derivative=?","options":["0","1","2","∞"],"answer":"0"},

          {"id":587,"difficulty":"medium","question":"Second derivative positive implies?","options":["Minimum","Maximum","Constant","None"],"answer":"Minimum"},
          {"id":588,"difficulty":"medium","question":"Second derivative negative implies?","options":["Maximum","Minimum","Constant","Zero"],"answer":"Maximum"},

          {"id":589,"difficulty":"easy","question":"Derivative of x?","options":["1","x","0","2"],"answer":"1"},
          {"id":590,"difficulty":"medium","question":"Derivative of √x?","options":["1/(2√x)","√x","1/x","2√x"],"answer":"1/(2√x)"},
          {"id":591,"difficulty":"medium","question":"Derivative of ln(e^x)?","options":["1","x","e^x","0"],"answer":"1"},

          {"id":592,"difficulty":"easy","question":"Integral gives area under?","options":["Curve","Point","Line","Plane"],"answer":"Curve"},
          {"id":593,"difficulty":"medium","question":"∫0→1 x dx?","options":["1/2","1","0","2"],"answer":"1/2"},
          {"id":594,"difficulty":"medium","question":"∫0→2 x dx?","options":["2","4","1","3"],"answer":"2"},

          {"id":595,"difficulty":"medium","question":"Derivative of sin(x^2)?","options":["2x cos(x^2)","cos(x^2)","2x sin(x^2)","x cos x"],"answer":"2x cos(x^2)"},
          {"id":596,"difficulty":"hard","question":"Derivative of ln(x^2)?","options":["2/x","1/x","x","2x"],"answer":"2/x"},

          {"id":597,"difficulty":"easy","question":"Limit x→∞ 1/x?","options":["0","1","∞","-1"],"answer":"0"},
          {"id":598,"difficulty":"medium","question":"Limit x→0 e^x?","options":["1","0","e","∞"],"answer":"1"},

          {"id":599,"difficulty":"medium","question":"Derivative of e^(2x)?","options":["2e^(2x)","e^(2x)","2x","e^x"],"answer":"2e^(2x)"},
          {"id":600,"difficulty":"medium","question":"Integral of 1/(1+x^2)?","options":["tan^-1 x + C","ln x","sin x","cos x"],"answer":"tan^-1 x + C"},

          {"id":601,"difficulty":"easy","question":"Derivative of constant times function?","options":["Constant × derivative","Derivative","0","1"],"answer":"Constant × derivative"},
          {"id":602,"difficulty":"medium","question":"Product rule formula?","options":["uv'+vu'","u'v'","uv","u/v"],"answer":"uv'+vu'"},
          {"id":603,"difficulty":"hard","question":"Quotient rule numerator?","options":["v u' − u v'","u v","u'+v'","u/v"],"answer":"v u' − u v'"},

          {"id":604,"difficulty":"easy","question":"Derivative measures slope of?","options":["Tangent","Normal","Curve","Circle"],"answer":"Tangent"},
          {"id":605,"difficulty":"medium","question":"Normal slope equals?","options":["−1/m","m","1/m","0"],"answer":"−1/m"},

          {"id":606,"difficulty":"medium","question":"If slope 2 then normal slope?","options":["-1/2","2","1/2","-2"],"answer":"-1/2"},
          {"id":607,"difficulty":"easy","question":"Integral constant called?","options":["Constant of integration","Slope","Intercept","Limit"],"answer":"Constant of integration"},

          {"id":608,"difficulty":"medium","question":"Derivative of tan^-1 x?","options":["1/(1+x^2)","1/x","x","tan x"],"answer":"1/(1+x^2)"},
          {"id":609,"difficulty":"medium","question":"Derivative of sin^-1 x?","options":["1/√(1-x^2)","√(1-x^2)","1/x","cos x"],"answer":"1/√(1-x^2)"},

          {"id":610,"difficulty":"easy","question":"Integral of 0 dx?","options":["C","0","1","x"],"answer":"C"},
          {"id":611,"difficulty":"medium","question":"Derivative of x^4?","options":["4x^3","x^4","3x^2","4x"],"answer":"4x^3"},
          {"id":612,"difficulty":"medium","question":"Integral of 4x^3?","options":["x^4+C","4x^4","x^3","4x"],"answer":"x^4+C"},

          {"id":613,"difficulty":"medium","question":"Derivative of log x (base e)?","options":["1/x","log x","x","e^x"],"answer":"1/x"},
          {"id":614,"difficulty":"hard","question":"Derivative of e^(x^2)?","options":["2x e^(x^2)","e^(x^2)","x e^x","2e^x"],"answer":"2x e^(x^2)"},

          {"id":615,"difficulty":"easy","question":"Integral of cos x from 0 to π/2?","options":["1","0","2","-1"],"answer":"1"},
          {"id":616,"difficulty":"medium","question":"Integral of sin x from 0 to π?","options":["2","1","0","-1"],"answer":"2"},

          {"id":617,"difficulty":"medium","question":"Derivative of 1/x?","options":["-1/x^2","1/x","x","-x"],"answer":"-1/x^2"},
          {"id":618,"difficulty":"medium","question":"Integral of 1/x^2?","options":["-1/x + C","ln x","x^2","1/x"],"answer":"-1/x + C"},

          {"id":619,"difficulty":"hard","question":"d/dx (x sin x)?","options":["sin x + x cos x","cos x","x cos x","sin x"],"answer":"sin x + x cos x"},
          {"id":620,"difficulty":"hard","question":"∫x cos x dx uses?","options":["Integration by parts","Substitution","Limit","Partial fraction"],"answer":"Integration by parts"}
        ]
      },
      {
        "name": "Coordinate Geometry",
        "questions": [
          {"id":621,"difficulty":"easy","question":"Distance between (0,0) and (3,4)?","options":["5","7","25","1"],"answer":"5"},
          {"id":622,"difficulty":"easy","question":"Slope of line y=mx+c?","options":["m","c","x","y"],"answer":"m"},
          {"id":623,"difficulty":"easy","question":"Midpoint of (2,4) and (4,6)?","options":["(3,5)","(2,5)","(4,5)","(3,4)"],"answer":"(3,5)"},
          {"id":624,"difficulty":"easy","question":"Center of circle x²+y²=9?","options":["(0,0)","(3,3)","(1,1)","(9,9)"],"answer":"(0,0)"},
          {"id":625,"difficulty":"medium","question":"Slope between (1,2) and (3,6)?","options":["2","3","1","4"],"answer":"2"},
          {"id":626,"difficulty":"medium","question":"Equation of x-axis?","options":["y=0","x=0","x=y","y=1"],"answer":"y=0"},
          {"id":627,"difficulty":"medium","question":"Equation of y-axis?","options":["x=0","y=0","x=y","y=1"],"answer":"x=0"},
          {"id":628,"difficulty":"medium","question":"Slope of vertical line?","options":["Undefined","0","1","∞"],"answer":"Undefined"},
          {"id":629,"difficulty":"medium","question":"Slope of horizontal line?","options":["0","1","Undefined","∞"],"answer":"0"},
          {"id":630,"difficulty":"hard","question":"Condition for perpendicular lines?","options":["m1m2=-1","m1=m2","m1+m2=0","m1/m2=1"],"answer":"m1m2=-1"},

          {"id":631,"difficulty":"easy","question":"Distance formula?","options":["√((x2-x1)^2+(y2-y1)^2)","x2-x1","y2-y1","x+y"],"answer":"√((x2-x1)^2+(y2-y1)^2)"},
          {"id":632,"difficulty":"medium","question":"Section formula midpoint?","options":["((x1+x2)/2,(y1+y2)/2)","(x1+x2,y1+y2)","(x1-x2,y1-y2)","None"],"answer":"((x1+x2)/2,(y1+y2)/2)"},
          {"id":633,"difficulty":"medium","question":"Equation of line slope form?","options":["y-y1=m(x-x1)","y=mx+c","ax+by+c=0","x+y=0"],"answer":"y-y1=m(x-x1)"},
          {"id":634,"difficulty":"medium","question":"General equation of line?","options":["ax+by+c=0","y=mx","x+y=1","x=0"],"answer":"ax+by+c=0"},
          {"id":635,"difficulty":"hard","question":"Slope of ax+by+c=0?","options":["-a/b","b/a","a/b","-b/a"],"answer":"-a/b"},

          {"id":636,"difficulty":"easy","question":"Radius of circle x²+y²=16?","options":["4","16","8","2"],"answer":"4"},
          {"id":637,"difficulty":"medium","question":"Center of circle x²+y²+4x=0?","options":["(-2,0)","(2,0)","(0,2)","(0,-2)"],"answer":"(-2,0)"},
          {"id":638,"difficulty":"medium","question":"Equation of circle center (0,0)?","options":["x²+y²=r²","x+y=r","x-y=r","xy=r"],"answer":"x²+y²=r²"},
          {"id":639,"difficulty":"medium","question":"Length of latus rectum parabola y²=4ax?","options":["4a","2a","a","8a"],"answer":"4a"},
          {"id":640,"difficulty":"hard","question":"Focus of parabola y²=4ax?","options":["(a,0)","(0,a)","(-a,0)","(0,-a)"],"answer":"(a,0)"},

          {"id":641,"difficulty":"easy","question":"Eccentricity of circle?","options":["0","1","2","∞"],"answer":"0"},
          {"id":642,"difficulty":"medium","question":"Eccentricity of parabola?","options":["1","0","2","∞"],"answer":"1"},
          {"id":643,"difficulty":"medium","question":"Eccentricity of ellipse?","options":["<1","=1",">1","0"],"answer":"<1"},
          {"id":644,"difficulty":"medium","question":"Eccentricity of hyperbola?","options":[">1","<1","=1","0"],"answer":">1"},
          {"id":645,"difficulty":"hard","question":"Standard ellipse equation?","options":["x²/a²+y²/b²=1","x²+y²=r²","y²=4ax","xy=1"],"answer":"x²/a²+y²/b²=1"},

          {"id":646,"difficulty":"easy","question":"Distance of (1,1) from origin?","options":["√2","2","1","0"],"answer":"√2"},
          {"id":647,"difficulty":"medium","question":"Slope of line joining (2,3),(4,7)?","options":["2","1","3","4"],"answer":"2"},
          {"id":648,"difficulty":"medium","question":"Intercept form equation?","options":["x/a+y/b=1","ax+by+c=0","y=mx+c","x+y=0"],"answer":"x/a+y/b=1"},
          {"id":649,"difficulty":"medium","question":"Point satisfying x-axis?","options":["(a,0)","(0,a)","(a,a)","(1,1)"],"answer":"(a,0)"},
          {"id":650,"difficulty":"hard","question":"Point satisfying y-axis?","options":["(0,a)","(a,0)","(a,a)","(1,1)"],"answer":"(0,a)"},

          {"id":651,"difficulty":"easy","question":"Distance between parallel lines constant?","options":["Yes","No","Sometimes","Never"],"answer":"Yes"},
          {"id":652,"difficulty":"medium","question":"Slope of parallel lines?","options":["Equal","Opposite","Zero","Undefined"],"answer":"Equal"},
          {"id":653,"difficulty":"medium","question":"Angle between perpendicular lines?","options":["90°","45°","180°","60°"],"answer":"90°"},
          {"id":654,"difficulty":"medium","question":"Equation of circle diameter endpoints formula uses?","options":["Midpoint","Slope","Integral","Limit"],"answer":"Midpoint"},
          {"id":655,"difficulty":"hard","question":"Chord joining two points lies in?","options":["Circle","Line","Plane","Curve"],"answer":"Circle"},

          {"id":656,"difficulty":"easy","question":"Distance from (0,0) to (6,8)?","options":["10","14","48","5"],"answer":"10"},
          {"id":657,"difficulty":"medium","question":"Slope between (2,2),(4,4)?","options":["1","2","0","-1"],"answer":"1"},
          {"id":658,"difficulty":"medium","question":"Line through origin slope m?","options":["y=mx","y=mx+c","x=0","y=0"],"answer":"y=mx"},
          {"id":659,"difficulty":"medium","question":"Equation of circle diameter endpoints uses?","options":["Distance formula","Slope","Integral","Limit"],"answer":"Distance formula"},
          {"id":660,"difficulty":"hard","question":"Tangent slope equals?","options":["Derivative","Integral","Area","Limit"],"answer":"Derivative"},

          {"id":661,"difficulty":"easy","question":"Equation x=3 represents?","options":["Vertical line","Horizontal line","Circle","Parabola"],"answer":"Vertical line"},
          {"id":662,"difficulty":"medium","question":"Equation y=5 represents?","options":["Horizontal line","Vertical line","Circle","Ellipse"],"answer":"Horizontal line"},
          {"id":663,"difficulty":"medium","question":"Distance formula derived from?","options":["Pythagoras theorem","Newton law","Log rule","Algebra"],"answer":"Pythagoras theorem"},
          {"id":664,"difficulty":"medium","question":"Slope intercept form?","options":["y=mx+c","x+y=1","ax+by+c=0","x/a+y/b=1"],"answer":"y=mx+c"},
          {"id":665,"difficulty":"hard","question":"Normal slope if tangent slope m?","options":["-1/m","m","1/m","0"],"answer":"-1/m"},

          {"id":666,"difficulty":"easy","question":"Distance between (0,0),(1,1)?","options":["√2","2","1","0"],"answer":"√2"},
          {"id":667,"difficulty":"medium","question":"Slope of line (1,3),(3,7)?","options":["2","1","3","4"],"answer":"2"},
          {"id":668,"difficulty":"medium","question":"Parallel lines slope relation?","options":["m1=m2","m1m2=-1","m1+m2=0","None"],"answer":"m1=m2"},
          {"id":669,"difficulty":"medium","question":"Equation of parabola opening right?","options":["y²=4ax","x²=4ay","xy=1","x+y=1"],"answer":"y²=4ax"},
          {"id":670,"difficulty":"hard","question":"Directrix of y²=4ax?","options":["x=-a","x=a","y=a","y=-a"],"answer":"x=-a"},

          {"id":671,"difficulty":"easy","question":"Circle equation center origin radius r?","options":["x²+y²=r²","x+y=r","xy=r","x²-y²=r"],"answer":"x²+y²=r²"},
          {"id":672,"difficulty":"medium","question":"Length of chord formula uses?","options":["Distance formula","Slope","Integral","Log"],"answer":"Distance formula"},
          {"id":673,"difficulty":"medium","question":"Equation of ellipse center origin?","options":["x²/a²+y²/b²=1","x²+y²=r²","xy=1","y²=4ax"],"answer":"x²/a²+y²/b²=1"},
          {"id":674,"difficulty":"medium","question":"Hyperbola equation?","options":["x²/a²−y²/b²=1","x²+y²=1","y²=4ax","x+y=1"],"answer":"x²/a²−y²/b²=1"},
          {"id":675,"difficulty":"hard","question":"Asymptotes of rectangular hyperbola?","options":["x=0,y=0","x=y","x=-y","x=y and x=-y"],"answer":"x=y and x=-y"},

          {"id":676,"difficulty":"easy","question":"Slope of line y=3x+2?","options":["3","2","1","0"],"answer":"3"},
          {"id":677,"difficulty":"medium","question":"Intercept of y=3x+2?","options":["2","3","1","0"],"answer":"2"},
          {"id":678,"difficulty":"medium","question":"Point on y-axis?","options":["(0,a)","(a,0)","(a,a)","(1,1)"],"answer":"(0,a)"},
          {"id":679,"difficulty":"medium","question":"Point on x-axis?","options":["(a,0)","(0,a)","(a,a)","(1,1)"],"answer":"(a,0)"},
          {"id":680,"difficulty":"hard","question":"Angle between parallel lines?","options":["0°","90°","45°","180°"],"answer":"0°"},
          {"id":681,"difficulty":"medium","question":"Angle between perpendicular lines?","options":["90°","0°","180°","45°"],"answer":"90°"},
          {"id":682,"difficulty":"medium","question":"Distance formula uses coordinate difference squared?","options":["Yes","No","Sometimes","Never"],"answer":"Yes"}
        ]
      },
      {
        "name": "Trig and Vectors",
        "questions": [
          {"id":683,"difficulty":"easy","question":"sin 30°?","options":["1/2","1","0","√3/2"],"answer":"1/2"},
          {"id":684,"difficulty":"easy","question":"cos 60°?","options":["1/2","1","0","√3/2"],"answer":"1/2"},
          {"id":685,"difficulty":"easy","question":"tan 45°?","options":["1","0","√3","1/√3"],"answer":"1"},
          {"id":686,"difficulty":"easy","question":"sin 90°?","options":["1","0","1/2","√3/2"],"answer":"1"},
          {"id":687,"difficulty":"medium","question":"cos 0°?","options":["1","0","-1","1/2"],"answer":"1"},
          {"id":688,"difficulty":"medium","question":"tan 0°?","options":["0","1","∞","-1"],"answer":"0"},
          {"id":689,"difficulty":"medium","question":"sin²x+cos²x=?","options":["1","0","2","x"],"answer":"1"},
          {"id":690,"difficulty":"medium","question":"1+tan²x=?","options":["sec²x","cos²x","sin²x","cot²x"],"answer":"sec²x"},
          {"id":691,"difficulty":"medium","question":"1+cot²x=?","options":["csc²x","sec²x","tan²x","sin²x"],"answer":"csc²x"},
          {"id":692,"difficulty":"hard","question":"sin(90−x)?","options":["cos x","sin x","-sin x","-cos x"],"answer":"cos x"},

          {"id":693,"difficulty":"easy","question":"cos(90−x)?","options":["sin x","cos x","-sin x","1"],"answer":"sin x"},
          {"id":694,"difficulty":"medium","question":"tan(90−x)?","options":["cot x","tan x","sec x","sin x"],"answer":"cot x"},
          {"id":695,"difficulty":"medium","question":"sin2x formula?","options":["2sinxcosx","sin²x","cos²x","tanx"],"answer":"2sinxcosx"},
          {"id":696,"difficulty":"medium","question":"cos2x formula?","options":["cos²x−sin²x","2sinxcosx","sin²x","cos²x"],"answer":"cos²x−sin²x"},
          {"id":697,"difficulty":"hard","question":"tan2x formula?","options":["2tanx/(1−tan²x)","tan²x","2tanx","tanx"],"answer":"2tanx/(1−tan²x)"},

          {"id":698,"difficulty":"easy","question":"Value of sin45°?","options":["√2/2","1","1/2","√3/2"],"answer":"√2/2"},
          {"id":699,"difficulty":"medium","question":"cos45°?","options":["√2/2","1","1/2","0"],"answer":"√2/2"},
          {"id":700,"difficulty":"medium","question":"tan30°?","options":["1/√3","√3","1","0"],"answer":"1/√3"},
          {"id":701,"difficulty":"medium","question":"tan60°?","options":["√3","1","1/√3","0"],"answer":"√3"},
          {"id":702,"difficulty":"hard","question":"secθ reciprocal of?","options":["cosθ","sinθ","tanθ","cotθ"],"answer":"cosθ"},

          {"id":703,"difficulty":"easy","question":"Magnitude of vector i?","options":["1","0","2","√2"],"answer":"1"},
          {"id":704,"difficulty":"easy","question":"i·i?","options":["1","0","i","j"],"answer":"1"},
          {"id":705,"difficulty":"easy","question":"i·j?","options":["0","1","i","j"],"answer":"0"},
          {"id":706,"difficulty":"medium","question":"i×j?","options":["k","0","i","j"],"answer":"k"},
          {"id":707,"difficulty":"medium","question":"j×k?","options":["i","k","j","0"],"answer":"i"},
          {"id":708,"difficulty":"medium","question":"k×i?","options":["j","i","k","0"],"answer":"j"},
          {"id":709,"difficulty":"medium","question":"i×i?","options":["0","1","i","j"],"answer":"0"},
          {"id":710,"difficulty":"hard","question":"Angle between i and j?","options":["90°","0°","45°","180°"],"answer":"90°"},

          {"id":711,"difficulty":"easy","question":"Magnitude of vector i+j?","options":["√2","2","1","0"],"answer":"√2"},
          {"id":712,"difficulty":"medium","question":"|ai|=?","options":["|a|","a²","1","0"],"answer":"|a|"},
          {"id":713,"difficulty":"medium","question":"Dot product formula?","options":["|A||B|cosθ","|A||B|sinθ","A+B","A×B"],"answer":"|A||B|cosθ"},
          {"id":714,"difficulty":"medium","question":"Cross product magnitude?","options":["|A||B|sinθ","|A||B|cosθ","A+B","A·B"],"answer":"|A||B|sinθ"},
          {"id":715,"difficulty":"hard","question":"If vectors perpendicular then dot product?","options":["0","1","∞","-1"],"answer":"0"},

          {"id":716,"difficulty":"easy","question":"Unit vector magnitude?","options":["1","0","2","√2"],"answer":"1"},
          {"id":717,"difficulty":"medium","question":"Vector direction represented by?","options":["Unit vector","Magnitude","Scalar","Angle"],"answer":"Unit vector"},
          {"id":718,"difficulty":"medium","question":"Projection formula?","options":["A·B/|B|","A×B","A+B","|A||B|"],"answer":"A·B/|B|"},
          {"id":719,"difficulty":"medium","question":"Scalar product result?","options":["Scalar","Vector","Matrix","None"],"answer":"Scalar"},
          {"id":720,"difficulty":"hard","question":"Cross product result?","options":["Vector","Scalar","Number","Zero"],"answer":"Vector"},

          {"id":721,"difficulty":"easy","question":"sin(-x)?","options":["-sinx","sinx","cosx","-cosx"],"answer":"-sinx"},
          {"id":722,"difficulty":"medium","question":"cos(-x)?","options":["cosx","-cosx","sinx","-sinx"],"answer":"cosx"},
          {"id":723,"difficulty":"medium","question":"tan(-x)?","options":["-tanx","tanx","cotx","secx"],"answer":"-tanx"},
          {"id":724,"difficulty":"medium","question":"Period of sinx?","options":["2π","π","π/2","4π"],"answer":"2π"},
          {"id":725,"difficulty":"hard","question":"Period of tanx?","options":["π","2π","π/2","4π"],"answer":"π"},

          {"id":726,"difficulty":"easy","question":"sin²30°?","options":["1/4","1/2","1","0"],"answer":"1/4"},
          {"id":727,"difficulty":"medium","question":"cos²60°?","options":["1/4","1/2","1","0"],"answer":"1/4"},
          {"id":728,"difficulty":"medium","question":"tan²45°?","options":["1","2","0","1/2"],"answer":"1"},
          {"id":729,"difficulty":"medium","question":"sin60°cos30°?","options":["3/4","1/2","1","0"],"answer":"3/4"},
          {"id":730,"difficulty":"hard","question":"cos²x−sin²x equals?","options":["cos2x","sin2x","tanx","secx"],"answer":"cos2x"},

          {"id":731,"difficulty":"easy","question":"Magnitude formula vector (a,b)?","options":["√(a²+b²)","a+b","a-b","ab"],"answer":"√(a²+b²)"},
          {"id":732,"difficulty":"medium","question":"Zero vector magnitude?","options":["0","1","∞","Undefined"],"answer":"0"},
          {"id":733,"difficulty":"medium","question":"Parallel vectors cross product?","options":["0","1","∞","Vector"],"answer":"0"},
          {"id":734,"difficulty":"medium","question":"Dot product parallel vectors?","options":["|A||B|","0","1","-1"],"answer":"|A||B|"},
          {"id":735,"difficulty":"hard","question":"Angle between same vectors?","options":["0°","90°","45°","180°"],"answer":"0°"},

          {"id":736,"difficulty":"easy","question":"Unit vector along i?","options":["i","j","k","0"],"answer":"i"},
          {"id":737,"difficulty":"medium","question":"Unit vector along j?","options":["j","i","k","0"],"answer":"j"},
          {"id":738,"difficulty":"medium","question":"Unit vector along k?","options":["k","i","j","0"],"answer":"k"},
          {"id":739,"difficulty":"medium","question":"Vector addition result?","options":["Vector","Scalar","Matrix","Number"],"answer":"Vector"},
          {"id":740,"difficulty":"hard","question":"Scalar multiplication changes?","options":["Magnitude","Direction","Both","None"],"answer":"Magnitude"},

          {"id":741,"difficulty":"easy","question":"sin0°?","options":["0","1","1/2","-1"],"answer":"0"},
          {"id":742,"difficulty":"medium","question":"cos90°?","options":["0","1","-1","1/2"],"answer":"0"},
          {"id":743,"difficulty":"medium","question":"tan90°?","options":["Undefined","0","1","∞"],"answer":"Undefined"},
          {"id":744,"difficulty":"hard","question":"Vector magnitude always?","options":["Non‑negative","Negative","Complex","Zero"],"answer":"Non‑negative"}
        ]
      }
    ]
  },
  {
    "subject": "Biology",
    "topics": [
      {
        "name": "Cell and Genetics",
        "questions": [
          {"id":745,"difficulty":"easy","question":"Who discovered the cell?","options":["Hooke","Darwin","Mendel","Watson"],"answer":"Hooke"},
          {"id":746,"difficulty":"easy","question":"Powerhouse of the cell?","options":["Mitochondria","Nucleus","Ribosome","Golgi"],"answer":"Mitochondria"},
          {"id":747,"difficulty":"easy","question":"Suicidal bags of cell?","options":["Lysosome","Golgi","Nucleus","Ribosome"],"answer":"Lysosome"},
          {"id":748,"difficulty":"easy","question":"Control center of cell?","options":["Nucleus","Cytoplasm","Golgi","ER"],"answer":"Nucleus"},
          {"id":749,"difficulty":"medium","question":"Genetic material in most organisms?","options":["DNA","RNA","Protein","Carbohydrate"],"answer":"DNA"},
          {"id":750,"difficulty":"medium","question":"Sugar in DNA?","options":["Deoxyribose","Ribose","Glucose","Fructose"],"answer":"Deoxyribose"},
          {"id":751,"difficulty":"medium","question":"Sugar in RNA?","options":["Ribose","Deoxyribose","Glucose","Sucrose"],"answer":"Ribose"},
          {"id":752,"difficulty":"medium","question":"DNA bases include?","options":["A,T,G,C","A,U,G,C","A,T,U,C","G,T,U,C"],"answer":"A,T,G,C"},
          {"id":753,"difficulty":"medium","question":"RNA base replacing thymine?","options":["Uracil","Cytosine","Adenine","Guanine"],"answer":"Uracil"},
          {"id":754,"difficulty":"hard","question":"DNA structure discovered by?","options":["Watson and Crick","Mendel","Darwin","Morgan"],"answer":"Watson and Crick"},

          {"id":755,"difficulty":"easy","question":"Unit of heredity?","options":["Gene","Chromosome","Cell","Protein"],"answer":"Gene"},
          {"id":756,"difficulty":"easy","question":"Chromosomes made of?","options":["DNA and protein","RNA","Carbohydrates","Lipids"],"answer":"DNA and protein"},
          {"id":757,"difficulty":"medium","question":"Number of chromosomes in humans?","options":["46","23","44","48"],"answer":"46"},
          {"id":758,"difficulty":"medium","question":"Human gametes contain chromosomes?","options":["23","46","22","44"],"answer":"23"},
          {"id":759,"difficulty":"medium","question":"Phenotypic ratio of monohybrid cross?","options":["3:1","1:2:1","9:3:3:1","1:1"],"answer":"3:1"},
          {"id":760,"difficulty":"hard","question":"Genotypic ratio monohybrid cross?","options":["1:2:1","3:1","9:3:3:1","1:1"],"answer":"1:2:1"},

          {"id":761,"difficulty":"easy","question":"Father of genetics?","options":["Mendel","Darwin","Watson","Crick"],"answer":"Mendel"},
          {"id":762,"difficulty":"medium","question":"Law of segregation proposed by?","options":["Mendel","Darwin","Morgan","Watson"],"answer":"Mendel"},
          {"id":763,"difficulty":"medium","question":"Law of independent assortment applies to?","options":["Different chromosomes","Same gene","Same chromosome","None"],"answer":"Different chromosomes"},
          {"id":764,"difficulty":"hard","question":"Incomplete dominance example?","options":["Snapdragon","Pea plant","Maize","Wheat"],"answer":"Snapdragon"},

          {"id":765,"difficulty":"easy","question":"Cell division producing identical cells?","options":["Mitosis","Meiosis","Binary fission","Budding"],"answer":"Mitosis"},
          {"id":766,"difficulty":"medium","question":"Reduction division?","options":["Meiosis","Mitosis","Amitosis","Binary fission"],"answer":"Meiosis"},
          {"id":767,"difficulty":"medium","question":"Number of divisions in meiosis?","options":["2","1","3","4"],"answer":"2"},
          {"id":768,"difficulty":"medium","question":"Crossing over occurs in?","options":["Prophase I","Metaphase","Anaphase","Telophase"],"answer":"Prophase I"},
          {"id":769,"difficulty":"hard","question":"Chromosome duplication occurs in phase?","options":["S phase","G1","G2","M"],"answer":"S phase"},

          {"id":770,"difficulty":"easy","question":"Protein synthesis occurs in?","options":["Ribosome","Golgi","Nucleus","Lysosome"],"answer":"Ribosome"},
          {"id":771,"difficulty":"medium","question":"RNA that carries amino acids?","options":["tRNA","mRNA","rRNA","snRNA"],"answer":"tRNA"},
          {"id":772,"difficulty":"medium","question":"RNA carrying genetic message?","options":["mRNA","tRNA","rRNA","snRNA"],"answer":"mRNA"},
          {"id":773,"difficulty":"medium","question":"Ribosome mainly contains?","options":["rRNA","DNA","Lipid","Protein"],"answer":"rRNA"},
          {"id":774,"difficulty":"hard","question":"Triplet codon codes for?","options":["Amino acid","Gene","Protein","Sugar"],"answer":"Amino acid"},

          {"id":775,"difficulty":"easy","question":"Mutation means?","options":["Change in DNA","Protein formation","Cell division","Gene duplication"],"answer":"Change in DNA"},
          {"id":776,"difficulty":"medium","question":"Mutagen example?","options":["Radiation","Water","Oxygen","Glucose"],"answer":"Radiation"},
          {"id":777,"difficulty":"medium","question":"DNA replication is?","options":["Semi‑conservative","Conservative","Dispersive","Random"],"answer":"Semi‑conservative"},
          {"id":778,"difficulty":"hard","question":"DNA replication enzyme?","options":["DNA polymerase","RNA polymerase","Ligase","Helicase"],"answer":"DNA polymerase"},

          {"id":779,"difficulty":"easy","question":"Chromosome composed of?","options":["Chromatin","Protein","RNA","Carbohydrate"],"answer":"Chromatin"},
          {"id":780,"difficulty":"medium","question":"Chromatin contains?","options":["DNA and protein","RNA","Carbohydrate","Lipid"],"answer":"DNA and protein"},
          {"id":781,"difficulty":"medium","question":"Genetic recombination occurs in?","options":["Meiosis","Mitosis","Binary fission","Budding"],"answer":"Meiosis"},
          {"id":782,"difficulty":"hard","question":"Linked genes located on?","options":["Same chromosome","Different chromosomes","RNA","Protein"],"answer":"Same chromosome"},

          {"id":783,"difficulty":"easy","question":"Basic unit of life?","options":["Cell","Gene","Protein","Atom"],"answer":"Cell"},
          {"id":784,"difficulty":"medium","question":"Largest cell organelle?","options":["Nucleus","Golgi","ER","Lysosome"],"answer":"Nucleus"},
          {"id":785,"difficulty":"medium","question":"Energy molecule of cell?","options":["ATP","DNA","RNA","ADP"],"answer":"ATP"},
          {"id":786,"difficulty":"hard","question":"ATP contains phosphate groups?","options":["3","2","1","4"],"answer":"3"},

          {"id":787,"difficulty":"easy","question":"Organelle for lipid synthesis?","options":["Smooth ER","Rough ER","Golgi","Lysosome"],"answer":"Smooth ER"},
          {"id":788,"difficulty":"medium","question":"Protein modification occurs in?","options":["Golgi apparatus","Nucleus","Mitochondria","Lysosome"],"answer":"Golgi apparatus"},
          {"id":789,"difficulty":"medium","question":"Cell membrane mainly made of?","options":["Lipid bilayer","Protein only","Carbohydrate","DNA"],"answer":"Lipid bilayer"},
          {"id":790,"difficulty":"hard","question":"Fluid mosaic model proposed by?","options":["Singer and Nicolson","Watson","Crick","Mendel"],"answer":"Singer and Nicolson"},

          {"id":791,"difficulty":"easy","question":"Organelle containing digestive enzymes?","options":["Lysosome","Nucleus","Ribosome","ER"],"answer":"Lysosome"},
          {"id":792,"difficulty":"medium","question":"Organelle responsible for packaging proteins?","options":["Golgi apparatus","ER","Mitochondria","Ribosome"],"answer":"Golgi apparatus"},
          {"id":793,"difficulty":"medium","question":"Double membrane organelle?","options":["Mitochondria","Ribosome","Golgi","Lysosome"],"answer":"Mitochondria"},
          {"id":794,"difficulty":"hard","question":"Genetic material of mitochondria?","options":["mtDNA","RNA","Protein","None"],"answer":"mtDNA"},

          {"id":795,"difficulty":"easy","question":"Chromosomes visible during?","options":["Cell division","Interphase","Growth","Rest"],"answer":"Cell division"},
          {"id":796,"difficulty":"medium","question":"Spindle fibers formed in?","options":["Mitosis","Translation","Replication","Mutation"],"answer":"Mitosis"},
          {"id":797,"difficulty":"medium","question":"Sister chromatids separate in?","options":["Anaphase","Prophase","Metaphase","Telophase"],"answer":"Anaphase"},
          {"id":798,"difficulty":"hard","question":"Homologous chromosomes separate in?","options":["Meiosis I","Mitosis","Meiosis II","Interphase"],"answer":"Meiosis I"},

          {"id":799,"difficulty":"easy","question":"Cell outer boundary?","options":["Cell membrane","Cell wall","Nucleus","Golgi"],"answer":"Cell membrane"},
          {"id":800,"difficulty":"medium","question":"Plant cell wall made of?","options":["Cellulose","Protein","Chitin","Lipid"],"answer":"Cellulose"},
          {"id":801,"difficulty":"medium","question":"Fungal cell wall made of?","options":["Chitin","Cellulose","Protein","Starch"],"answer":"Chitin"},
          {"id":802,"difficulty":"medium","question":"Bacterial genetic material?","options":["Circular DNA","RNA","Protein","Chromosome pairs"],"answer":"Circular DNA"},
          {"id":803,"difficulty":"hard","question":"Operon model proposed by?","options":["Jacob and Monod","Watson","Crick","Morgan"],"answer":"Jacob and Monod"},
          {"id":804,"difficulty":"medium","question":"Lac operon regulates?","options":["Lactose metabolism","Protein synthesis","DNA replication","Photosynthesis"],"answer":"Lactose metabolism"},
          {"id":805,"difficulty":"medium","question":"Transcription produces?","options":["RNA","DNA","Protein","Lipid"],"answer":"RNA"},
          {"id":806,"difficulty":"hard","question":"Translation produces?","options":["Protein","DNA","RNA","Glucose"],"answer":"Protein"}
        ]
      },
      {
        "name": "Physiology",
        "questions": [
          {"id":807,"difficulty":"easy","question":"Master gland of endocrine system?","options":["Pituitary","Thyroid","Adrenal","Pancreas"],"answer":"Pituitary"},
          {"id":808,"difficulty":"easy","question":"Gas exchange site in lungs?","options":["Alveoli","Bronchi","Trachea","Larynx"],"answer":"Alveoli"},
          {"id":809,"difficulty":"easy","question":"Color of hemoglobin?","options":["Red","Blue","Green","Yellow"],"answer":"Red"},
          {"id":810,"difficulty":"medium","question":"Hormone regulating blood sugar?","options":["Insulin","Adrenaline","Thyroxine","Cortisol"],"answer":"Insulin"},
          {"id":811,"difficulty":"medium","question":"Hormone increasing blood sugar?","options":["Glucagon","Insulin","Thyroxine","Melatonin"],"answer":"Glucagon"},
          {"id":812,"difficulty":"medium","question":"Pacemaker of heart?","options":["SA node","AV node","Bundle of His","Purkinje"],"answer":"SA node"},
          {"id":813,"difficulty":"medium","question":"Normal human heartbeat per minute?","options":["72","50","100","120"],"answer":"72"},
          {"id":814,"difficulty":"hard","question":"Oxygen transported mainly by?","options":["Hemoglobin","Plasma","Platelets","WBC"],"answer":"Hemoglobin"},

          {"id":815,"difficulty":"easy","question":"Blood cells carrying oxygen?","options":["RBC","WBC","Platelets","Plasma"],"answer":"RBC"},
          {"id":816,"difficulty":"medium","question":"Cells involved in immunity?","options":["WBC","RBC","Platelets","Plasma"],"answer":"WBC"},
          {"id":817,"difficulty":"medium","question":"Blood clotting cells?","options":["Platelets","RBC","WBC","Plasma"],"answer":"Platelets"},
          {"id":818,"difficulty":"medium","question":"Liquid part of blood?","options":["Plasma","Serum","Lymph","Water"],"answer":"Plasma"},
          {"id":819,"difficulty":"hard","question":"Blood group system discovered by?","options":["Landsteiner","Pasteur","Darwin","Mendel"],"answer":"Landsteiner"},

          {"id":820,"difficulty":"easy","question":"Organ filtering blood?","options":["Kidney","Liver","Heart","Lung"],"answer":"Kidney"},
          {"id":821,"difficulty":"medium","question":"Functional unit of kidney?","options":["Nephron","Neuron","Alveoli","Glomerulus"],"answer":"Nephron"},
          {"id":822,"difficulty":"medium","question":"Waste removed by kidneys?","options":["Urea","Glucose","Protein","Oxygen"],"answer":"Urea"},
          {"id":823,"difficulty":"medium","question":"Urine formation occurs in?","options":["Nephron","Liver","Heart","Lung"],"answer":"Nephron"},
          {"id":824,"difficulty":"hard","question":"Dialysis replaces function of?","options":["Kidney","Liver","Heart","Pancreas"],"answer":"Kidney"},

          {"id":825,"difficulty":"easy","question":"Organ pumping blood?","options":["Heart","Lung","Liver","Kidney"],"answer":"Heart"},
          {"id":826,"difficulty":"medium","question":"Number of heart chambers?","options":["4","3","2","5"],"answer":"4"},
          {"id":827,"difficulty":"medium","question":"Largest artery in body?","options":["Aorta","Pulmonary artery","Carotid","Femoral"],"answer":"Aorta"},
          {"id":828,"difficulty":"medium","question":"Blood vessels carrying blood to heart?","options":["Veins","Arteries","Capillaries","Nerves"],"answer":"Veins"},
          {"id":829,"difficulty":"hard","question":"Blood vessels carrying blood away from heart?","options":["Arteries","Veins","Capillaries","Nerves"],"answer":"Arteries"},

          {"id":830,"difficulty":"easy","question":"Organ responsible for breathing?","options":["Lungs","Heart","Kidney","Liver"],"answer":"Lungs"},
          {"id":831,"difficulty":"medium","question":"Respiratory pigment in blood?","options":["Hemoglobin","Chlorophyll","Melanin","Keratin"],"answer":"Hemoglobin"},
          {"id":832,"difficulty":"medium","question":"Gas released in respiration?","options":["CO2","O2","N2","H2"],"answer":"CO2"},
          {"id":833,"difficulty":"medium","question":"Energy currency of cell?","options":["ATP","DNA","RNA","Protein"],"answer":"ATP"},
          {"id":834,"difficulty":"hard","question":"End product of glycolysis?","options":["Pyruvate","Glucose","ATP","CO2"],"answer":"Pyruvate"},

          {"id":835,"difficulty":"easy","question":"Largest gland in body?","options":["Liver","Pancreas","Thyroid","Adrenal"],"answer":"Liver"},
          {"id":836,"difficulty":"medium","question":"Bile produced by?","options":["Liver","Stomach","Pancreas","Gall bladder"],"answer":"Liver"},
          {"id":837,"difficulty":"medium","question":"Bile stored in?","options":["Gall bladder","Liver","Pancreas","Stomach"],"answer":"Gall bladder"},
          {"id":838,"difficulty":"medium","question":"Enzyme digesting proteins in stomach?","options":["Pepsin","Amylase","Lipase","Trypsin"],"answer":"Pepsin"},
          {"id":839,"difficulty":"hard","question":"Enzyme digesting fats?","options":["Lipase","Amylase","Pepsin","Trypsin"],"answer":"Lipase"},

          {"id":840,"difficulty":"easy","question":"Digestion of carbohydrates begins in?","options":["Mouth","Stomach","Small intestine","Large intestine"],"answer":"Mouth"},
          {"id":841,"difficulty":"medium","question":"Enzyme in saliva?","options":["Amylase","Lipase","Pepsin","Trypsin"],"answer":"Amylase"},
          {"id":842,"difficulty":"medium","question":"Longest part of digestive tract?","options":["Small intestine","Large intestine","Stomach","Esophagus"],"answer":"Small intestine"},
          {"id":843,"difficulty":"medium","question":"Absorption of nutrients occurs in?","options":["Small intestine","Stomach","Large intestine","Liver"],"answer":"Small intestine"},
          {"id":844,"difficulty":"hard","question":"Finger‑like projections increasing absorption?","options":["Villi","Alveoli","Nephrons","Cilia"],"answer":"Villi"},

          {"id":845,"difficulty":"easy","question":"Hormone controlling metabolism?","options":["Thyroxine","Insulin","Adrenaline","Melatonin"],"answer":"Thyroxine"},
          {"id":846,"difficulty":"medium","question":"Hormone from adrenal gland?","options":["Adrenaline","Insulin","Thyroxine","Glucagon"],"answer":"Adrenaline"},
          {"id":847,"difficulty":"medium","question":"Sleep hormone?","options":["Melatonin","Adrenaline","Insulin","Cortisol"],"answer":"Melatonin"},
          {"id":848,"difficulty":"medium","question":"Hormone controlling calcium?","options":["Parathyroid hormone","Insulin","Thyroxine","Melatonin"],"answer":"Parathyroid hormone"},
          {"id":849,"difficulty":"hard","question":"Deficiency of iodine causes?","options":["Goiter","Diabetes","Anemia","Scurvy"],"answer":"Goiter"},

          {"id":850,"difficulty":"easy","question":"Structural unit of nervous system?","options":["Neuron","Nephron","Alveoli","Axon"],"answer":"Neuron"},
          {"id":851,"difficulty":"medium","question":"Longest cell in body?","options":["Neuron","Muscle cell","RBC","WBC"],"answer":"Neuron"},
          {"id":852,"difficulty":"medium","question":"Brain protected by?","options":["Skull","Ribs","Vertebrae","Pelvis"],"answer":"Skull"},
          {"id":853,"difficulty":"medium","question":"Spinal cord located in?","options":["Vertebral column","Skull","Chest","Pelvis"],"answer":"Vertebral column"},
          {"id":854,"difficulty":"hard","question":"Reflex action controlled by?","options":["Spinal cord","Brain","Heart","Liver"],"answer":"Spinal cord"},

          {"id":855,"difficulty":"easy","question":"Muscle contraction unit?","options":["Sarcomere","Neuron","Nephron","Axon"],"answer":"Sarcomere"},
          {"id":856,"difficulty":"medium","question":"Protein in muscles?","options":["Actin and myosin","Keratin","Collagen","Albumin"],"answer":"Actin and myosin"},
          {"id":857,"difficulty":"medium","question":"Energy for muscle contraction?","options":["ATP","DNA","RNA","Protein"],"answer":"ATP"},
          {"id":858,"difficulty":"medium","question":"Voluntary muscles called?","options":["Skeletal","Cardiac","Smooth","Involuntary"],"answer":"Skeletal"},
          {"id":859,"difficulty":"hard","question":"Involuntary muscle example?","options":["Smooth muscle","Skeletal muscle","Biceps","Triceps"],"answer":"Smooth muscle"},

          {"id":860,"difficulty":"easy","question":"Heart muscle type?","options":["Cardiac muscle","Smooth muscle","Skeletal muscle","Voluntary muscle"],"answer":"Cardiac muscle"},
          {"id":861,"difficulty":"medium","question":"Muscle fatigue due to accumulation of?","options":["Lactic acid","Glucose","ATP","Protein"],"answer":"Lactic acid"},
          {"id":862,"difficulty":"medium","question":"Bone forming cells?","options":["Osteoblasts","Neurons","RBC","WBC"],"answer":"Osteoblasts"},
          {"id":863,"difficulty":"medium","question":"Bone resorbing cells?","options":["Osteoclasts","Osteoblasts","Neurons","RBC"],"answer":"Osteoclasts"},
          {"id":864,"difficulty":"hard","question":"Mineral giving bone strength?","options":["Calcium","Iron","Sodium","Potassium"],"answer":"Calcium"},
          {"id":865,"difficulty":"medium","question":"Vitamin important for bones?","options":["Vitamin D","Vitamin C","Vitamin B","Vitamin A"],"answer":"Vitamin D"},
          {"id":866,"difficulty":"medium","question":"Disease due to vitamin D deficiency?","options":["Rickets","Scurvy","Night blindness","Beriberi"],"answer":"Rickets"},
          {"id":867,"difficulty":"easy","question":"Largest organ of human body?","options":["Skin","Liver","Heart","Brain"],"answer":"Skin"},
          {"id":868,"difficulty":"medium","question":"Main function of skin?","options":["Protection","Digestion","Respiration","Circulation"],"answer":"Protection"}
        ]
      },
      {
        "name": "Diversity and Org",
        "questions": [
          {"id":869,"difficulty":"easy","question":"Five kingdom classification proposed by?","options":["Whittaker","Linnaeus","Darwin","Aristotle"],"answer":"Whittaker"},
          {"id":870,"difficulty":"easy","question":"Scientific name of human?","options":["Homo sapiens","Pan troglodytes","Mus musculus","Homo erectus"],"answer":"Homo sapiens"},
          {"id":871,"difficulty":"easy","question":"Scientific name of mango?","options":["Mangifera indica","Oryza sativa","Pisum sativum","Solanum tuberosum"],"answer":"Mangifera indica"},
          {"id":872,"difficulty":"medium","question":"Plants without vascular tissues?","options":["Bryophytes","Pteridophytes","Gymnosperms","Angiosperms"],"answer":"Bryophytes"},
          {"id":873,"difficulty":"medium","question":"First vascular plants?","options":["Pteridophytes","Bryophytes","Gymnosperms","Angiosperms"],"answer":"Pteridophytes"},
          {"id":874,"difficulty":"medium","question":"Seeds without fruits?","options":["Gymnosperms","Angiosperms","Bryophytes","Algae"],"answer":"Gymnosperms"},
          {"id":875,"difficulty":"medium","question":"Flowering plants?","options":["Angiosperms","Gymnosperms","Bryophytes","Algae"],"answer":"Angiosperms"},
          {"id":876,"difficulty":"hard","question":"Example of gymnosperm?","options":["Pinus","Mango","Rice","Rose"],"answer":"Pinus"},

          {"id":877,"difficulty":"easy","question":"Kingdom containing bacteria?","options":["Monera","Protista","Fungi","Plantae"],"answer":"Monera"},
          {"id":878,"difficulty":"medium","question":"Example of Protista?","options":["Amoeba","Mushroom","Moss","Bacteria"],"answer":"Amoeba"},
          {"id":879,"difficulty":"medium","question":"Cell wall of fungi made of?","options":["Chitin","Cellulose","Starch","Protein"],"answer":"Chitin"},
          {"id":880,"difficulty":"medium","question":"Example of fungi?","options":["Yeast","Amoeba","Spirogyra","Moss"],"answer":"Yeast"},
          {"id":881,"difficulty":"hard","question":"Fungi obtain nutrition by?","options":["Saprophytic","Photosynthesis","Autotrophic","Chemosynthesis"],"answer":"Saprophytic"},

          {"id":882,"difficulty":"easy","question":"Phylum with jointed legs?","options":["Arthropoda","Mollusca","Annelida","Chordata"],"answer":"Arthropoda"},
          {"id":883,"difficulty":"medium","question":"Example of annelid?","options":["Earthworm","Cockroach","Snail","Starfish"],"answer":"Earthworm"},
          {"id":884,"difficulty":"medium","question":"Example of mollusc?","options":["Pila","Cockroach","Earthworm","Starfish"],"answer":"Pila"},
          {"id":885,"difficulty":"medium","question":"Example of echinoderm?","options":["Starfish","Earthworm","Cockroach","Snail"],"answer":"Starfish"},
          {"id":886,"difficulty":"hard","question":"Water vascular system present in?","options":["Echinodermata","Arthropoda","Chordata","Annelida"],"answer":"Echinodermata"},

          {"id":887,"difficulty":"easy","question":"Animals with backbone belong to?","options":["Chordata","Arthropoda","Mollusca","Annelida"],"answer":"Chordata"},
          {"id":888,"difficulty":"medium","question":"Example of fish?","options":["Rohu","Frog","Snake","Pigeon"],"answer":"Rohu"},
          {"id":889,"difficulty":"medium","question":"Amphibian example?","options":["Frog","Snake","Lizard","Pigeon"],"answer":"Frog"},
          {"id":890,"difficulty":"medium","question":"Reptile example?","options":["Snake","Frog","Pigeon","Fish"],"answer":"Snake"},
          {"id":891,"difficulty":"hard","question":"Warm blooded animals?","options":["Birds and mammals","Fish","Reptiles","Amphibians"],"answer":"Birds and mammals"},

          {"id":892,"difficulty":"easy","question":"Example of bird?","options":["Peacock","Snake","Frog","Fish"],"answer":"Peacock"},
          {"id":893,"difficulty":"medium","question":"Example of mammal?","options":["Human","Snake","Frog","Fish"],"answer":"Human"},
          {"id":894,"difficulty":"medium","question":"Mammals possess?","options":["Mammary glands","Feathers","Scales","Gills"],"answer":"Mammary glands"},
          {"id":895,"difficulty":"medium","question":"Bird body covering?","options":["Feathers","Hair","Scales","Skin"],"answer":"Feathers"},
          {"id":896,"difficulty":"hard","question":"Reptiles body covering?","options":["Scales","Hair","Feathers","Skin"],"answer":"Scales"},

          {"id":897,"difficulty":"easy","question":"Study of plants?","options":["Botany","Zoology","Ecology","Genetics"],"answer":"Botany"},
          {"id":898,"difficulty":"medium","question":"Study of animals?","options":["Zoology","Botany","Ecology","Genetics"],"answer":"Zoology"},
          {"id":899,"difficulty":"medium","question":"Branch dealing with classification?","options":["Taxonomy","Genetics","Ecology","Physiology"],"answer":"Taxonomy"},
          {"id":900,"difficulty":"medium","question":"Binomial nomenclature proposed by?","options":["Linnaeus","Darwin","Mendel","Hooke"],"answer":"Linnaeus"},
          {"id":901,"difficulty":"hard","question":"Two parts of scientific name?","options":["Genus and species","Family and genus","Order and class","Species and family"],"answer":"Genus and species"},

          {"id":902,"difficulty":"easy","question":"Example of algae?","options":["Spirogyra","Moss","Fern","Pine"],"answer":"Spirogyra"},
          {"id":903,"difficulty":"medium","question":"Bryophytes called amphibians of plant kingdom because?","options":["Need water for reproduction","Live in water","Have flowers","Have seeds"],"answer":"Need water for reproduction"},
          {"id":904,"difficulty":"medium","question":"Example of pteridophyte?","options":["Fern","Moss","Pine","Rose"],"answer":"Fern"},
          {"id":905,"difficulty":"medium","question":"Angiosperm seeds enclosed in?","options":["Fruit","Cone","Spore","Leaf"],"answer":"Fruit"},
          {"id":906,"difficulty":"hard","question":"Double fertilization occurs in?","options":["Angiosperms","Gymnosperms","Bryophytes","Algae"],"answer":"Angiosperms"},

          {"id":907,"difficulty":"easy","question":"Example of monocot plant?","options":["Rice","Mango","Pea","Rose"],"answer":"Rice"},
          {"id":908,"difficulty":"medium","question":"Example of dicot plant?","options":["Pea","Rice","Wheat","Maize"],"answer":"Pea"},
          {"id":909,"difficulty":"medium","question":"Root system in monocots?","options":["Fibrous","Taproot","Adventitious","None"],"answer":"Fibrous"},
          {"id":910,"difficulty":"medium","question":"Root system in dicots?","options":["Taproot","Fibrous","None","Adventitious"],"answer":"Taproot"},
          {"id":911,"difficulty":"hard","question":"Leaves with parallel venation belong to?","options":["Monocots","Dicots","Gymnosperms","Bryophytes"],"answer":"Monocots"},

          {"id":912,"difficulty":"easy","question":"Leaves with reticulate venation belong to?","options":["Dicots","Monocots","Gymnosperms","Algae"],"answer":"Dicots"},
          {"id":913,"difficulty":"medium","question":"Plant tissue transporting water?","options":["Xylem","Phloem","Cambium","Cortex"],"answer":"Xylem"},
          {"id":914,"difficulty":"medium","question":"Plant tissue transporting food?","options":["Phloem","Xylem","Cambium","Cortex"],"answer":"Phloem"},
          {"id":915,"difficulty":"medium","question":"Growth tissue in plants?","options":["Meristem","Xylem","Phloem","Cortex"],"answer":"Meristem"},
          {"id":916,"difficulty":"hard","question":"Secondary growth occurs due to?","options":["Cambium","Xylem","Phloem","Cortex"],"answer":"Cambium"},

          {"id":917,"difficulty":"easy","question":"Example of vertebrate?","options":["Fish","Earthworm","Snail","Cockroach"],"answer":"Fish"},
          {"id":918,"difficulty":"medium","question":"Example of invertebrate?","options":["Earthworm","Fish","Frog","Snake"],"answer":"Earthworm"},
          {"id":919,"difficulty":"medium","question":"Respiratory organ of fish?","options":["Gills","Lungs","Skin","Trachea"],"answer":"Gills"},
          {"id":920,"difficulty":"medium","question":"Respiratory organ of insects?","options":["Trachea","Lungs","Gills","Skin"],"answer":"Trachea"},
          {"id":921,"difficulty":"hard","question":"Respiration in earthworm through?","options":["Skin","Gills","Lungs","Trachea"],"answer":"Skin"},

          {"id":922,"difficulty":"easy","question":"Study of fungi?","options":["Mycology","Botany","Zoology","Ecology"],"answer":"Mycology"},
          {"id":923,"difficulty":"medium","question":"Study of algae?","options":["Phycology","Botany","Zoology","Genetics"],"answer":"Phycology"},
          {"id":924,"difficulty":"medium","question":"Study of insects?","options":["Entomology","Botany","Zoology","Ecology"],"answer":"Entomology"},
          {"id":925,"difficulty":"medium","question":"Study of viruses?","options":["Virology","Bacteriology","Genetics","Ecology"],"answer":"Virology"},
          {"id":926,"difficulty":"hard","question":"Viruses replicate inside?","options":["Host cell","Water","Soil","Air"],"answer":"Host cell"},

          {"id":927,"difficulty":"easy","question":"Largest animal phylum?","options":["Arthropoda","Chordata","Mollusca","Annelida"],"answer":"Arthropoda"},
          {"id":928,"difficulty":"medium","question":"Example of arthropod?","options":["Cockroach","Earthworm","Snail","Starfish"],"answer":"Cockroach"},
          {"id":929,"difficulty":"medium","question":"Radula present in?","options":["Mollusca","Arthropoda","Annelida","Chordata"],"answer":"Mollusca"},
          {"id":930,"difficulty":"hard","question":"Notochord present in?","options":["Chordata","Arthropoda","Mollusca","Annelida"],"answer":"Chordata"}
        ]
      },
      {
        "name": "Ecology and Repro",
        "questions": [
          {"id":931,"difficulty":"easy","question":"Primary source of energy in ecosystem?","options":["Sun","Plants","Animals","Bacteria"],"answer":"Sun"},
          {"id":932,"difficulty":"easy","question":"Organisms producing food?","options":["Producers","Consumers","Decomposers","Parasites"],"answer":"Producers"},
          {"id":933,"difficulty":"medium","question":"Organisms feeding on producers?","options":["Herbivores","Carnivores","Omnivores","Parasites"],"answer":"Herbivores"},
          {"id":934,"difficulty":"medium","question":"Animals eating other animals?","options":["Carnivores","Herbivores","Producers","Decomposers"],"answer":"Carnivores"},
          {"id":935,"difficulty":"medium","question":"Organisms breaking dead matter?","options":["Decomposers","Producers","Consumers","Herbivores"],"answer":"Decomposers"},
          {"id":936,"difficulty":"hard","question":"10% law proposed by?","options":["Lindeman","Odum","Darwin","Mendel"],"answer":"Lindeman"},

          {"id":937,"difficulty":"easy","question":"Sequence of organisms feeding?","options":["Food chain","Food web","Ecosystem","Biome"],"answer":"Food chain"},
          {"id":938,"difficulty":"medium","question":"Interconnected food chains?","options":["Food web","Food chain","Trophic level","Biome"],"answer":"Food web"},
          {"id":939,"difficulty":"medium","question":"First trophic level?","options":["Producers","Consumers","Carnivores","Decomposers"],"answer":"Producers"},
          {"id":940,"difficulty":"medium","question":"Second trophic level?","options":["Herbivores","Producers","Carnivores","Decomposers"],"answer":"Herbivores"},
          {"id":941,"difficulty":"hard","question":"Third trophic level?","options":["Carnivores","Producers","Herbivores","Decomposers"],"answer":"Carnivores"},

          {"id":942,"difficulty":"easy","question":"Study of ecosystems?","options":["Ecology","Botany","Zoology","Genetics"],"answer":"Ecology"},
          {"id":943,"difficulty":"medium","question":"Largest ecosystem?","options":["Biosphere","Forest","Ocean","Desert"],"answer":"Biosphere"},
          {"id":944,"difficulty":"medium","question":"Area where organisms live?","options":["Habitat","Niche","Biome","Population"],"answer":"Habitat"},
          {"id":945,"difficulty":"medium","question":"Role of species in ecosystem?","options":["Niche","Habitat","Biome","Population"],"answer":"Niche"},
          {"id":946,"difficulty":"hard","question":"Biotic components include?","options":["Living organisms","Water","Air","Soil"],"answer":"Living organisms"},

          {"id":947,"difficulty":"easy","question":"Abiotic components include?","options":["Water","Plants","Animals","Bacteria"],"answer":"Water"},
          {"id":948,"difficulty":"medium","question":"Gas causing acid rain?","options":["SO2","O2","N2","CO2"],"answer":"SO2"},
          {"id":949,"difficulty":"medium","question":"Gas causing greenhouse effect?","options":["CO2","O2","N2","He"],"answer":"CO2"},
          {"id":950,"difficulty":"medium","question":"Layer protecting from UV?","options":["Ozone","Troposphere","Mesosphere","Exosphere"],"answer":"Ozone"},
          {"id":951,"difficulty":"hard","question":"Ozone layer found in?","options":["Stratosphere","Troposphere","Mesosphere","Exosphere"],"answer":"Stratosphere"},

          {"id":952,"difficulty":"easy","question":"Male reproductive part of flower?","options":["Stamen","Pistil","Petal","Sepal"],"answer":"Stamen"},
          {"id":953,"difficulty":"medium","question":"Female reproductive part of flower?","options":["Pistil","Stamen","Petal","Sepal"],"answer":"Pistil"},
          {"id":954,"difficulty":"medium","question":"Transfer of pollen?","options":["Pollination","Fertilization","Germination","Seed formation"],"answer":"Pollination"},
          {"id":955,"difficulty":"medium","question":"Fusion of gametes?","options":["Fertilization","Pollination","Germination","Budding"],"answer":"Fertilization"},
          {"id":956,"difficulty":"hard","question":"Double fertilization occurs in?","options":["Angiosperms","Gymnosperms","Bryophytes","Pteridophytes"],"answer":"Angiosperms"},

          {"id":957,"difficulty":"easy","question":"Male reproductive organ in humans?","options":["Testes","Ovary","Uterus","Vagina"],"answer":"Testes"},
          {"id":958,"difficulty":"medium","question":"Female reproductive organ?","options":["Ovary","Testes","Penis","Scrotum"],"answer":"Ovary"},
          {"id":959,"difficulty":"medium","question":"Female gamete?","options":["Ovum","Sperm","Zygote","Embryo"],"answer":"Ovum"},
          {"id":960,"difficulty":"medium","question":"Male gamete?","options":["Sperm","Ovum","Zygote","Embryo"],"answer":"Sperm"},
          {"id":961,"difficulty":"hard","question":"Fertilized egg called?","options":["Zygote","Embryo","Fetus","Gamete"],"answer":"Zygote"},

          {"id":962,"difficulty":"easy","question":"Development stage after zygote?","options":["Embryo","Gamete","Sperm","Ovum"],"answer":"Embryo"},
          {"id":963,"difficulty":"medium","question":"Human gestation period?","options":["9 months","6 months","12 months","3 months"],"answer":"9 months"},
          {"id":964,"difficulty":"medium","question":"Hormone responsible for milk secretion?","options":["Prolactin","Insulin","Thyroxine","Adrenaline"],"answer":"Prolactin"},
          {"id":965,"difficulty":"medium","question":"Hormone responsible for milk ejection?","options":["Oxytocin","Insulin","Thyroxine","Adrenaline"],"answer":"Oxytocin"},
          {"id":966,"difficulty":"hard","question":"IVF stands for?","options":["In vitro fertilization","Internal fertilization","In vivo formation","In vitro formation"],"answer":"In vitro fertilization"},

          {"id":967,"difficulty":"easy","question":"Example of asexual reproduction?","options":["Binary fission","Fertilization","Pollination","Germination"],"answer":"Binary fission"},
          {"id":968,"difficulty":"medium","question":"Budding occurs in?","options":["Yeast","Amoeba","Hydra","Paramecium"],"answer":"Hydra"},
          {"id":969,"difficulty":"medium","question":"Binary fission occurs in?","options":["Amoeba","Hydra","Yeast","Frog"],"answer":"Amoeba"},
          {"id":970,"difficulty":"medium","question":"Vegetative propagation example?","options":["Potato","Mango seed","Rice seed","Wheat seed"],"answer":"Potato"},
          {"id":971,"difficulty":"hard","question":"Hormone for fruit ripening?","options":["Ethylene","Auxin","Gibberellin","Cytokinin"],"answer":"Ethylene"},

          {"id":972,"difficulty":"easy","question":"World Environment Day?","options":["June 5","April 22","Dec 1","May 1"],"answer":"June 5"},
          {"id":973,"difficulty":"medium","question":"Biodiversity hotspot example?","options":["Western Ghats","Sahara","Arctic","Antarctica"],"answer":"Western Ghats"},
          {"id":974,"difficulty":"medium","question":"Conservation in natural habitat?","options":["In‑situ","Ex‑situ","Artificial","External"],"answer":"In‑situ"},
          {"id":975,"difficulty":"medium","question":"Zoo conservation type?","options":["Ex‑situ","In‑situ","Natural","Wild"],"answer":"Ex‑situ"},
          {"id":976,"difficulty":"hard","question":"Protected area conserving biodiversity?","options":["National park","City","Village","Town"],"answer":"National park"},

          {"id":977,"difficulty":"easy","question":"Example of biodegradable waste?","options":["Food waste","Plastic","Glass","Metal"],"answer":"Food waste"},
          {"id":978,"difficulty":"medium","question":"Non‑biodegradable waste?","options":["Plastic","Paper","Food","Leaves"],"answer":"Plastic"},
          {"id":979,"difficulty":"medium","question":"Process of recycling nutrients?","options":["Biogeochemical cycle","Food chain","Respiration","Photosynthesis"],"answer":"Biogeochemical cycle"},
          {"id":980,"difficulty":"medium","question":"Carbon cycle mainly involves?","options":["CO2 exchange","O2 exchange","Nitrogen fixation","Water flow"],"answer":"CO2 exchange"},
          {"id":981,"difficulty":"hard","question":"Nitrogen fixation carried out by?","options":["Rhizobium","Amoeba","Yeast","Hydra"],"answer":"Rhizobium"},

          {"id":982,"difficulty":"easy","question":"Population means?","options":["Group of same species","Different species","Single organism","Ecosystem"],"answer":"Group of same species"},
          {"id":983,"difficulty":"medium","question":"Community means?","options":["Different species together","Single species","Single organism","Abiotic factors"],"answer":"Different species together"},
          {"id":984,"difficulty":"medium","question":"Ecosystem consists of?","options":["Biotic and abiotic","Only plants","Only animals","Only microbes"],"answer":"Biotic and abiotic"},
          {"id":985,"difficulty":"medium","question":"Largest ecological unit?","options":["Biosphere","Biome","Ecosystem","Population"],"answer":"Biosphere"},
          {"id":986,"difficulty":"hard","question":"Ecological pyramid representing energy always?","options":["Upright","Inverted","Flat","Circular"],"answer":"Upright"},

          {"id":987,"difficulty":"easy","question":"Study of environment protection?","options":["Environmental science","Botany","Zoology","Genetics"],"answer":"Environmental science"},
          {"id":988,"difficulty":"medium","question":"Major greenhouse gas?","options":["CO2","O2","N2","He"],"answer":"CO2"},
          {"id":989,"difficulty":"medium","question":"Gas responsible for ozone depletion?","options":["CFCs","CO2","O2","N2"],"answer":"CFCs"},
          {"id":990,"difficulty":"medium","question":"Process converting nitrogen to ammonia?","options":["Nitrogen fixation","Denitrification","Nitrification","Ammonification"],"answer":"Nitrogen fixation"},
          {"id":991,"difficulty":"hard","question":"Process converting nitrates to nitrogen gas?","options":["Denitrification","Nitrification","Fixation","Assimilation"],"answer":"Denitrification"},
          {"id":992,"difficulty":"hard","question":"Organisms fixing atmospheric nitrogen?","options":["Rhizobium","Algae","Fungi","Protozoa"],"answer":"Rhizobium"}
        ]
      }
    ]
  }

];

export default questionBank;

