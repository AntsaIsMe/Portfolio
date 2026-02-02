<script setup>
    defineProps({
        rank: { type: String, default: 'E-RANK' }, // D-Rank, C-Rank, etc.
        title: String,
        date: String,
        status: { type: String, default: 'COMPLETED' },
        description: String
    });
    </script>
    
    <template>
        <div class="relative rounded-lg group mb-8 overflow-hidden bg-darker/40  p-6 transition-all hover:bg-normal/20 hover:border-neon hover:rounded-lg">
            <div class="absolute inset-0 pointer-events-none opacity-10 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]"></div>
            <div class="relative z-10">
                <div class="flex justify-between items-center mb-2">
                    <span class="text-xs font-black tracking-[0.2em] text-red-500 px-2 py-1 border border-lighter/50 uppercase italic">
                        {{ rank }}
                    </span>
                    <span class="text-[13px] font-bold font-mono text-blue-300/50 uppercase tracking-widest">
                        {{ date }}
                    </span>
                </div>
    
                <h3 class="text-xl font-bold text-white uppercase tracking-tighter group-hover:text-blue-200 transition-colors">
                    {{ title }}
                </h3>
    
                <div class="flex items-center gap-2 my-3">
                    <div class="h-[2px] flex-1 bg-gradient-to-r from-lighter/50 to-transparent"></div>
                    <span class="text-[12px] font-bold text-lighter/70 text-without">
                        ● {{ status }}
                    </span>
                </div>
    
                <p class="text-sm text-blue-100/70 leading-relaxed font-light italic">
                    "{{ description }}"
                </p>
            </div>
        </div>
    </template>