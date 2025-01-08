 import { supabase } from "../../supabase";  
   const handleCompletion = async (gameCompleted, setGameCompleted, currentScore, game, currentLevel,userId,  navigate) => {
        try {
            if (gameCompleted) return;
        
            setGameCompleted(true);
            
            const finalScore = currentScore;
    
            const nextGame = game.game_number + 1;
        
            const { data: nextGameData, error: nextGameError } = await supabase
                .from("Games")
                .select("game_number")
                .eq("level", currentLevel)
                .eq("game_number", nextGame)
                .single();
        
            if (nextGameError || !nextGameData) {
               
                const nextLevel = currentLevel + 1;
        
                
                const { data: firstGameData, error: firstGameError } = await supabase
                    .from("Games")
                    .select("game_number")
                    .eq("level", nextLevel)
                    .order("game_number", { ascending: true })
                    .limit(1)
                    .single();  
        
                if (firstGameError) throw firstGameError;
        
                const nextGameId = firstGameData ? firstGameData.game_number : 1;
        
                
                const { error: updateError } = await supabase
                    .from("User_Game_Progress")
                    .update({
                        level_id: nextLevel,
                        game_id: nextGameId,
                        score: finalScore, 
                    })
                    .eq("user_id", userId);
        
                if (updateError) throw updateError;
        
                console.log(`Progress updated to level ${nextLevel} with game ${nextGameId} and score ${finalScore}`);
                    
               
                navigate("/home");
            } else {
                
                const { error: updateError } = await supabase
                    .from("User_Game_Progress")
                    .update({
                        game_id: nextGame,
                        score: finalScore, 
                    })
                    .eq("user_id", userId);
        
                if (updateError) throw updateError;
        
                console.log(`Progress updated to game ${nextGame} with score ${finalScore}`);
        
                
                window.location.reload();
            }
        } catch (err) {
            console.error("Error updating game progress:", err.message);
        }
    };
export default handleCompletion