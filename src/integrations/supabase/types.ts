export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.5";
  };
  public: {
    Tables: {
      highlights: {
        Row: {
          content: string;
          created_at: string;
          id: string;
          position: number;
          unit_id: string;
          updated_at: string;
        };
        Insert: {
          content: string;
          created_at?: string;
          id?: string;
          position?: number;
          unit_id: string;
          updated_at?: string;
        };
        Update: {
          content?: string;
          created_at?: string;
          id?: string;
          position?: number;
          unit_id?: string;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "highlights_unit_id_fkey";
            columns: ["unit_id"];
            isOneToOne: false;
            referencedRelation: "units";
            referencedColumns: ["id"];
          },
        ];
      };
      model_papers: {
        Row: {
          created_at: string;
          description: string | null;
          id: string;
          is_paid: boolean;
          paper_type: string;
          position: number;
          subject_id: string;
          subtitle: string | null;
          title: string;
          updated_at: string;
        };
        Insert: {
          created_at?: string;
          description?: string | null;
          id: string;
          is_paid?: boolean;
          paper_type?: string;
          position?: number;
          subject_id: string;
          subtitle?: string | null;
          title: string;
          updated_at?: string;
        };
        Update: {
          created_at?: string;
          description?: string | null;
          id?: string;
          is_paid?: boolean;
          paper_type?: string;
          position?: number;
          subject_id?: string;
          subtitle?: string | null;
          title?: string;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "model_papers_subject_id_fkey";
            columns: ["subject_id"];
            isOneToOne: false;
            referencedRelation: "subjects";
            referencedColumns: ["id"];
          },
        ];
      };
      notification_reads: {
        Row: {
          id: string;
          notification_id: string;
          read_at: string;
          user_id: string;
        };
        Insert: {
          id?: string;
          notification_id: string;
          read_at?: string;
          user_id: string;
        };
        Update: {
          id?: string;
          notification_id?: string;
          read_at?: string;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "notification_reads_notification_id_fkey";
            columns: ["notification_id"];
            isOneToOne: false;
            referencedRelation: "notifications";
            referencedColumns: ["id"];
          },
        ];
      };
      notifications: {
        Row: {
          body: string;
          category: string;
          created_at: string;
          id: string;
          is_published: boolean;
          link: string | null;
          program: string | null;
          semester: number | null;
          title: string;
          updated_at: string;
        };
        Insert: {
          body: string;
          category?: string;
          created_at?: string;
          id?: string;
          is_published?: boolean;
          link?: string | null;
          program?: string | null;
          semester?: number | null;
          title: string;
          updated_at?: string;
        };
        Update: {
          body?: string;
          category?: string;
          created_at?: string;
          id?: string;
          is_published?: boolean;
          link?: string | null;
          program?: string | null;
          semester?: number | null;
          title?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
      paper_questions: {
        Row: {
          answer_lines: string[];
          created_at: string;
          display_order: number;
          id: string;
          marks: number | null;
          paper_id: string;
          prompt: string | null;
          question: string;
          question_no: number;
          updated_at: string;
        };
        Insert: {
          answer_lines?: string[];
          created_at?: string;
          display_order?: number;
          id?: string;
          marks?: number | null;
          paper_id: string;
          prompt?: string | null;
          question: string;
          question_no: number;
          updated_at?: string;
        };
        Update: {
          answer_lines?: string[];
          created_at?: string;
          display_order?: number;
          id?: string;
          marks?: number | null;
          paper_id?: string;
          prompt?: string | null;
          question?: string;
          question_no?: number;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "paper_questions_paper_id_fkey";
            columns: ["paper_id"];
            isOneToOne: false;
            referencedRelation: "model_papers";
            referencedColumns: ["id"];
          },
        ];
      };
      payments: {
        Row: {
          amount: number;
          created_at: string;
          currency: string;
          id: string;
          is_demo: boolean;
          method: string | null;
          plan: string;
          reference: string | null;
          status: string;
          user_id: string;
        };
        Insert: {
          amount: number;
          created_at?: string;
          currency?: string;
          id?: string;
          is_demo?: boolean;
          method?: string | null;
          plan: string;
          reference?: string | null;
          status?: string;
          user_id: string;
        };
        Update: {
          amount?: number;
          created_at?: string;
          currency?: string;
          id?: string;
          is_demo?: boolean;
          method?: string | null;
          plan?: string;
          reference?: string | null;
          status?: string;
          user_id?: string;
        };
        Relationships: [];
      };
      profiles: {
        Row: {
          avatar_url: string | null;
          created_at: string;
          email: string | null;
          full_name: string | null;
          id: string;
          is_premium: boolean;
          plan: string | null;
          premium_since: string | null;
          program_id: string | null;
          semester: number | null;
          updated_at: string;
        };
        Insert: {
          avatar_url?: string | null;
          created_at?: string;
          email?: string | null;
          full_name?: string | null;
          id: string;
          is_premium?: boolean;
          plan?: string | null;
          premium_since?: string | null;
          program_id?: string | null;
          semester?: number | null;
          updated_at?: string;
        };
        Update: {
          avatar_url?: string | null;
          created_at?: string;
          email?: string | null;
          full_name?: string | null;
          id?: string;
          is_premium?: boolean;
          plan?: string | null;
          premium_since?: string | null;
          program_id?: string | null;
          semester?: number | null;
          updated_at?: string;
        };
        Relationships: [];
      };
      revision_points: {
        Row: {
          content: string;
          created_at: string;
          display_order: number;
          id: string;
          kind: string;
          point_number: number;
          unit_id: string;
          updated_at: string;
        };
        Insert: {
          content: string;
          created_at?: string;
          display_order?: number;
          id?: string;
          kind?: string;
          point_number?: number;
          unit_id: string;
          updated_at?: string;
        };
        Update: {
          content?: string;
          created_at?: string;
          display_order?: number;
          id?: string;
          kind?: string;
          point_number?: number;
          unit_id?: string;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "revision_points_unit_id_fkey";
            columns: ["unit_id"];
            isOneToOne: false;
            referencedRelation: "units";
            referencedColumns: ["id"];
          },
        ];
      };
      subjects: {
        Row: {
          created_at: string;
          elective_group: string | null;
          icon: string;
          id: string;
          name: string;
          position: number;
          program: string;
          semester: number | null;
          updated_at: string;
        };
        Insert: {
          created_at?: string;
          elective_group?: string | null;
          icon?: string;
          id: string;
          name: string;
          position?: number;
          program: string;
          semester?: number | null;
          updated_at?: string;
        };
        Update: {
          created_at?: string;
          elective_group?: string | null;
          icon?: string;
          id?: string;
          name?: string;
          position?: number;
          program?: string;
          semester?: number | null;
          updated_at?: string;
        };
        Relationships: [];
      };
      units: {
        Row: {
          created_at: string;
          id: string;
          subject_id: string;
          title: string;
          unit_number: number;
          updated_at: string;
        };
        Insert: {
          created_at?: string;
          id: string;
          subject_id: string;
          title: string;
          unit_number: number;
          updated_at?: string;
        };
        Update: {
          created_at?: string;
          id?: string;
          subject_id?: string;
          title?: string;
          unit_number?: number;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "units_subject_id_fkey";
            columns: ["subject_id"];
            isOneToOne: false;
            referencedRelation: "subjects";
            referencedColumns: ["id"];
          },
        ];
      };
      user_bookmarks: {
        Row: {
          created_at: string;
          id: string;
          note: string | null;
          revision_point_id: string | null;
          unit_id: string;
          user_id: string;
        };
        Insert: {
          created_at?: string;
          id?: string;
          note?: string | null;
          revision_point_id?: string | null;
          unit_id: string;
          user_id: string;
        };
        Update: {
          created_at?: string;
          id?: string;
          note?: string | null;
          revision_point_id?: string | null;
          unit_id?: string;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "user_bookmarks_revision_point_id_fkey";
            columns: ["revision_point_id"];
            isOneToOne: false;
            referencedRelation: "revision_points";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "user_bookmarks_unit_id_fkey";
            columns: ["unit_id"];
            isOneToOne: false;
            referencedRelation: "units";
            referencedColumns: ["id"];
          },
        ];
      };
      user_roles: {
        Row: {
          created_at: string;
          id: string;
          role: Database["public"]["Enums"]["app_role"];
          user_id: string;
        };
        Insert: {
          created_at?: string;
          id?: string;
          role: Database["public"]["Enums"]["app_role"];
          user_id: string;
        };
        Update: {
          created_at?: string;
          id?: string;
          role?: Database["public"]["Enums"]["app_role"];
          user_id?: string;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"];
          _user_id: string;
        };
        Returns: boolean;
      };
    };
    Enums: {
      app_role: "admin" | "moderator" | "user";
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">;

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">];

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] & DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R;
      }
      ? R
      : never
    : never;

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    keyof DefaultSchema["Tables"] | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I;
      }
      ? I
      : never
    : never;

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    keyof DefaultSchema["Tables"] | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U;
      }
      ? U
      : never
    : never;

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    keyof DefaultSchema["Enums"] | { schema: keyof DatabaseWithoutInternals },
  EnumName extends (DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never) = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never;

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    keyof DefaultSchema["CompositeTypes"] | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends (PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never) = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never;

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "moderator", "user"],
    },
  },
} as const;
