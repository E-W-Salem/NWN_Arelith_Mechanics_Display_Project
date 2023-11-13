class battle_log:
    def __init__(self, line):
       self.raw_line=line
       self.list_line=list(self.raw_line)
       self.split_line=self.raw_line.split(' ')
       self.attack_breakdown=self.raw_line[41:].strip(',\n').split(':')
    def attack_details(self):
        if (("attacks") in self.raw_line.lower()): #len(self.split_line[10:]) > 10:
            if len(self.attack_breakdown) == 1:
                print (self.attack_breakdown)

            if len(self.attack_breakdown) == 2:
                print (self.attack_breakdown)

            if len(self.attack_breakdown) > 3:
                #print (self.attack_breakdown)
                self.AOO = False
                self.Sneak = False
                self.OffHand = False
                self.Crit = False
                self.Hit = False
                for element in self.attack_breakdown:
                    if (("attacks") in element):
                        self.attacker = element.split('attacks')[0].strip(' ')
                        self.defender = element.split('attacks')[-1].strip(' ')
                    if (("hit") in element):
                        self.Hit = True
                    if (("=") in element):
                        self.base_attack=element.strip(' ()').split(' ')[2]
                        self.attack_roll=element.strip(' ()').split(' ')[0]
                        self.AB = element.strip(' ()').split(' ')[4]
                    if (("Sneak") in element):
                        self.Sneak = True
                    if (("Attack of Opportunity") in element):
                        self.AOO = True
                    if (("Off Hand") in element):
                        self.OffHand = True
                    if (("critical hit") in element):
                        self.Crit = True
            return True
        else:
            return False
                 
    def damage_details(self):
        if (("damages") in self.raw_line.lower().split()):
            self.Fire = False
            self.Cold = False
            self.Electric = False
            self.Acid = False
            self.Positive = False
            self.Negative = False
            self.Sonic = False
            self.Divine = False
            self.Psychic = False
            self.Entropy = False
            self.Poison = False
            self.Physical = False
            self.Magical = False
            for element in self.attack_breakdown:
                element = element.strip(' ')
                if (('damages') in element):
                    self.attacker = element.strip('() (').split('damages')[0].strip(' ')
                    self.defender = element.strip('() (').split('damages')[-1].strip(' ')
                    self.total = int(self.attack_breakdown[-1].split(' ')[1])
                if (('damages') not in element):
                    self.damage_breakdown = element.replace('(', '')
                    self.damage_breakdown = self.damage_breakdown.replace(')', '').strip(' ')
                    self.damage_breakdown = self.damage_breakdown.split(' ')
                    #print (int(self.damage_breakdown[0]))
                    self.damages = []
                    for r in range(len(self.damage_breakdown)):
                        if r == 0:
                            self.total = int(self.damage_breakdown[r])
                        elif r % 2 == 0:
                            #print (self.damage_breakdown[r-1], self.damage_breakdown[r])
                            self.damages.append({str(self.damage_breakdown[r]): int(self.damage_breakdown[r-1]) })
            return True
        else:
            return False
        #elif r > 0 & r < range(len(self.damage_breakdown))[-1]:
                        #print (self.damage_breakdown, self.damage_breakdown[r])
                        #    print (r, range(len(self.damage_breakdown)))
                        #if r == range(len(self.damage_breakdown))[-1]:
                        #    print (r, range(len(self.damage_breakdown)))

                    
