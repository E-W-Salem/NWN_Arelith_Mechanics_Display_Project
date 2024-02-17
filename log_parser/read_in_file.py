import os
from chat_classes import battle_log
from visualize_data import damage_dataframe, ab_dataframe, damage_filtering
import matplotlib.pyplot as plt
import pandas as pd
directory =  'C:/Users/davis/Development'
log = 'nwclientLog1.txt'

f = os.path.join(directory, log)


attack_df_base=[]
attack_df_base_columns=["Attacker", 
                        "Defender", 
                        "Base Attack", 
                        "Attack Roll", 
                        "AB", 
                        "Hit", 
                        "Crit", 
                        "Sneak", 
                        "AOO", 
                        "Off Hand"]
damage_df_base=[]
damage_df_base_columns=["Attacker", 
                        "Defender", 
                        "Total",
                        "Damages"]
summon_attack_df_base=[]
summon_damage_df_base=[]

with open(f) as F:
    for line in F:
        l=battle_log(line)
        attack_line = l.attack_details()
        if attack_line == True:
            try:
                attack_df_base.append([str(l.attacker), 
                                       str(l.defender), 
                                       int(l.base_attack), 
                                       int(l.attack_roll), 
                                       int(l.AB),
                                       bool(l.Hit),
                                       bool(l.Crit), 
                                       bool(l.Sneak),
                                       bool(l.AOO),
                                       bool(l.OffHand)])
            except:
                pass
        damage_line = l.damage_details()
        if damage_line == True:
            
            damage_df_base.append([str(l.attacker), 
                                   str(l.defender), 
                                   int(l.total),
                                   l.damages])

damage_df=damage_dataframe(damage_df_base, damage_df_base_columns)
attack_df = ab_dataframe(attack_df_base, attack_df_base_columns)

#Column_1 =  (attack_df[attack_df['Attacker'] == 'Bink']['AB'] + attack_df[attack_df['Attacker'] == 'Bink']["Attack Roll"] )
#Column_3 =  (attack_df[attack_df['Attacker'] == 'Summoned Shadow']['AB'] + attack_df[attack_df['Attacker'] == 'Summoned Shadow']["Attack Roll"] )

#Column_2 = (damage_df[damage_df['Attacker'] == 'Bink']['Total'] )
#Column_4 = (damage_df[damage_df['Attacker'] == 'Summoned Shadow']['Total'] )

#labels=['PC AB', 'PC Dmg', 'Shadow (lvl 6)', 'Shadow Dmg']
#plt.boxplot([Column_1, Column_2, Column_3, Column_4], labels=labels)
#plt.ylabel(' AB / Damage Totals')
#plt.title('7 Rogue 8 Swash 6 Shadowdancer')
#plt.show()

damage_filtering(damage_df)