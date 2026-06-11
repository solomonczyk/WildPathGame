import { motion } from 'framer-motion';
import { Lock, CheckCircle, BookOpen } from 'lucide-react';
import { SKILLS, SKILL_CATEGORIES } from '@/lib/gameData';
import { useState } from 'react';

export default function SkillTree({ unlockedSkills, onClose }) {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [activeCategory, setActiveCategory] = useState('fire');

  const categorySkills = SKILLS.filter(s => s.category === activeCategory);

  return (
    <div className="fixed inset-0 z-40 flex flex-col bg-background/98 backdrop-blur-md">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-border tactical-panel">
        <div>
          <div className="text-xs font-mono text-muted-foreground uppercase tracking-widest">СИСТЕМА НАВЫКОВ</div>
          <h2 className="font-heading text-xl font-bold text-foreground">Дерево выживания</h2>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-xs font-mono text-muted-foreground">
            {unlockedSkills.length}/{SKILLS.length} навыков
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 border border-border text-sm font-heading text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors rounded-sm"
          >
            ✕ Закрыть
          </button>
        </div>
      </div>

      {/* Category tabs */}
      <div className="flex overflow-x-auto border-b border-border bg-muted/20 px-2 gap-1 py-2">
        {Object.entries(SKILL_CATEGORIES).map(([key, cat]) => {
          const count = SKILLS.filter(s => s.category === key && unlockedSkills.includes(s.skill_id)).length;
          const total = SKILLS.filter(s => s.category === key).length;
          return (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`flex items-center gap-2 px-4 py-2 rounded-sm text-sm font-heading whitespace-nowrap transition-all border ${
                activeCategory === key
                  ? `${cat.bgColor} ${cat.borderColor} ${cat.color}`
                  : 'border-transparent text-muted-foreground hover:text-foreground'
              }`}
            >
              <span>{cat.icon}</span>
              <span className="hidden sm:inline">{cat.name}</span>
              <span className="text-xs font-mono opacity-60">{count}/{total}</span>
            </button>
          );
        })}
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Skills grid */}
        <div className="flex-1 overflow-y-auto p-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {categorySkills.map(skill => {
              const unlocked = unlockedSkills.includes(skill.skill_id);
              const prereqsMet = skill.prerequisites.every(p => unlockedSkills.includes(p));
              const cat = SKILL_CATEGORIES[skill.category];

              return (
                <motion.button
                  key={skill.skill_id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedSkill(selectedSkill?.skill_id === skill.skill_id ? null : skill)}
                  className={`p-4 rounded-sm border text-left transition-all duration-200 ${
                    unlocked
                      ? `${cat.bgColor} ${cat.borderColor}`
                      : prereqsMet
                        ? 'border-border/60 bg-muted/30 hover:border-border'
                        : 'border-border/20 bg-muted/10 opacity-50'
                  } ${selectedSkill?.skill_id === skill.skill_id ? 'ring-1 ring-accent' : ''}`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <span className="text-2xl">{skill.icon}</span>
                    <span className={`${unlocked ? 'text-success' : prereqsMet ? 'text-muted-foreground' : 'text-muted-foreground/30'}`}>
                      {unlocked ? <CheckCircle size={14} /> : <Lock size={14} />}
                    </span>
                  </div>
                  <div className={`text-xs font-heading font-semibold leading-tight ${unlocked ? cat.color : 'text-foreground/70'}`}>
                    {skill.name}
                  </div>
                  <div className="text-xs font-mono text-muted-foreground mt-1">
                    +{skill.xp_reward} XP
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Skill detail panel */}
        {selectedSkill && (
          <motion.div
            className="w-80 border-l border-border tactical-panel overflow-y-auto p-5 space-y-4"
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
          >
            <div className="flex items-start gap-3">
              <span className="text-3xl">{selectedSkill.icon}</span>
              <div>
                <div className={`text-xs font-mono uppercase tracking-widest ${SKILL_CATEGORIES[selectedSkill.category]?.color}`}>
                  {SKILL_CATEGORIES[selectedSkill.category]?.name}
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground">{selectedSkill.name}</h3>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {unlockedSkills.includes(selectedSkill.skill_id)
                ? <span className="flex items-center gap-1 text-xs text-success font-mono"><CheckCircle size={12}/> РАЗБЛОКИРОВАНО</span>
                : <span className="flex items-center gap-1 text-xs text-muted-foreground font-mono"><Lock size={12}/> ЗАБЛОКИРОВАНО</span>
              }
              <span className="text-xs font-mono text-muted-foreground">· {selectedSkill.xp_reward} XP</span>
            </div>

            <p className="text-sm text-foreground/80 leading-relaxed">{selectedSkill.description}</p>

            {selectedSkill.real_life_tip && (
              <div className="p-4 border border-accent/30 bg-accent/5 rounded-sm">
                <div className="flex items-center gap-2 mb-2">
                  <BookOpen size={12} className="text-accent" />
                  <span className="text-xs font-mono text-accent uppercase tracking-widest">В реальной жизни</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">{selectedSkill.real_life_tip}</p>
              </div>
            )}

            {selectedSkill.prerequisites.length > 0 && (
              <div>
                <div className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-2">Требования</div>
                {selectedSkill.prerequisites.map(pid => {
                  const prereqSkill = SKILLS.find(s => s.skill_id === pid);
                  const met = unlockedSkills.includes(pid);
                  return (
                    <div key={pid} className={`flex items-center gap-2 text-xs ${met ? 'text-success' : 'text-muted-foreground'}`}>
                      {met ? <CheckCircle size={11} /> : <Lock size={11} />}
                      {prereqSkill?.name || pid}
                    </div>
                  );
                })}
              </div>
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
}