import matplotlib.pyplot as plt
import pandas as pd
def damage_dataframe(damage_df_base, damage_df_base_columns):
    damage_df = pd.DataFrame(data=damage_df_base, columns=damage_df_base_columns)
    return damage_df
def ab_dataframe(attack_df_base, attack_df_base_columns):
    attack_df = pd.DataFrame(data=attack_df_base, columns=attack_df_base_columns)
    return attack_df
def damage_filtering(damage_df):
    columns = damage_df.columns
    unique_attacker = set(damage_df[columns[0]])
    unique_defender = set(damage_df[columns[1]])
    for attacker in unique_attacker:

        damages_df = damage_df[damage_df[columns[0]] == attacker]['Damages']
        totals_df = damage_df[damage_df[columns[0]] == attacker]['Total']
        attackers_df = damage_df[damage_df[columns[0]] == attacker]['Attacker']
        defender_df = damage_df[damage_df[columns[0]] == attacker]['Defender']
        print (attackers_df)
        print (defender_df)
        print (damages_df)
        print (totals_df)

        damage_types = []
        damage_amounts = []
        #damages_df.rename('Damages')
        for damage in damages_df:

            for damage_type_amount in damage:
                [(damage_type, damage_amount)] = damage_type_amount.items()
                damage_types.append(damage_type)
                damage_amounts.append(damage_amount)
        damage_types_set = set(damage_types)
#        print (attacker)
#        print (damage)
#        print (damage_types)
#        print (damage_types_set)
#        print (damage_amounts)
#        print ('---')
#        print (damages_df)
#        print ('---')
        #pd.plotting.boxplot()

