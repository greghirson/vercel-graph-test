
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-12-01 12:00:00", "b": 2607.6}, {"a": "2024-12-01 12:05:00", "b": 2688.2}, {"a": "2024-12-01 12:10:00", "b": 2648.6}, {"a": "2024-12-01 12:15:00", "b": 2647.6}, {"a": "2024-12-01 12:20:00", "b": 2657.4}, {"a": "2024-12-01 12:25:00", "b": 2555.4}, {"a": "2024-12-01 12:30:00", "b": 2610.8}, {"a": "2024-12-01 12:35:00", "b": 2729.25}, {"a": "2024-12-01 12:40:00", "b": 2893.4}, {"a": "2024-12-01 12:45:00", "b": 2868.6}, {"a": "2024-12-01 12:50:00", "b": 2836.4}, {"a": "2024-12-01 12:55:00", "b": 2900.2}, {"a": "2024-12-01 13:00:00", "b": 3072.4}, {"a": "2024-12-01 13:05:00", "b": 3056.0}, {"a": "2024-12-01 13:10:00", "b": 3025.25}, {"a": "2024-12-01 13:15:00", "b": 3020.0}, {"a": "2024-12-01 13:20:00", "b": 3021.5}, {"a": "2024-12-01 13:25:00", "b": 3014.4}, {"a": "2024-12-01 13:30:00", "b": 2918.0}, {"a": "2024-12-01 13:35:00", "b": 2894.2}, {"a": "2024-12-01 13:40:00", "b": 2849.4}, {"a": "2024-12-01 13:45:00", "b": 2759.4}, {"a": "2024-12-01 13:50:00", "b": 2690.8}, {"a": "2024-12-01 13:55:00", "b": 2692.2}, {"a": "2024-12-01 14:00:00", "b": 2822.0}, {"a": "2024-12-01 14:05:00", "b": 2653.8}, {"a": "2024-12-01 14:10:00", "b": 2712.6}, {"a": "2024-12-01 14:15:00", "b": 2767.4}, {"a": "2024-12-01 14:20:00", "b": 2760.2}, {"a": "2024-12-01 14:25:00", "b": 2788.2}, {"a": "2024-12-01 14:30:00", "b": 2746.4}, {"a": "2024-12-01 14:35:00", "b": 2748.6}, {"a": "2024-12-01 14:40:00", "b": 2834.4}, {"a": "2024-12-01 14:45:00", "b": 2759.6}, {"a": "2024-12-01 14:50:00", "b": 2796.6}, {"a": "2024-12-01 14:55:00", "b": 2787.6}, {"a": "2024-12-01 15:00:00", "b": 2738.8}, {"a": "2024-12-01 15:05:00", "b": 2697.8}, {"a": "2024-12-01 15:10:00", "b": 2770.4}, {"a": "2024-12-01 15:15:00", "b": 2875.4}, {"a": "2024-12-01 15:20:00", "b": 2796.0}, {"a": "2024-12-01 15:25:00", "b": 2780.5}, {"a": "2024-12-01 15:30:00", "b": 2813.4}, {"a": "2024-12-01 15:35:00", "b": 2830.2}, {"a": "2024-12-01 15:40:00", "b": 2969.8}, {"a": "2024-12-01 15:45:00", "b": 2860.8}, {"a": "2024-12-01 15:50:00", "b": 2896.0}, {"a": "2024-12-01 15:55:00", "b": 2889.8}, {"a": "2024-12-01 16:00:00", "b": 3207.6}, {"a": "2024-12-01 16:05:00", "b": 3142.2}, {"a": "2024-12-01 16:10:00", "b": 2894.6}, {"a": "2024-12-01 16:15:00", "b": 2975.6}, {"a": "2024-12-01 16:20:00", "b": 2803.2}, {"a": "2024-12-01 16:25:00", "b": 2810.8}, {"a": "2024-12-01 16:30:00", "b": 2853.2}, {"a": "2024-12-01 16:35:00", "b": 2837.0}, {"a": "2024-12-01 16:40:00", "b": 3098.8}, {"a": "2024-12-01 16:45:00", "b": 3264.0}, {"a": "2024-12-01 16:50:00", "b": 3471.0}, {"a": "2024-12-01 16:55:00", "b": 3580.2}, {"a": "2024-12-01 17:00:00", "b": 3559.0}, {"a": "2024-12-01 17:05:00", "b": 3657.2}, {"a": "2024-12-01 17:10:00", "b": 3735.8}, {"a": "2024-12-01 17:15:00", "b": 3900.0}, {"a": "2024-12-01 17:20:00", "b": 3638.4}, {"a": "2024-12-01 17:25:00", "b": 3782.5}, {"a": "2024-12-01 17:30:00", "b": 3787.6}, {"a": "2024-12-01 17:35:00", "b": 3151.6}, {"a": "2024-12-01 17:40:00", "b": 2917.4}, {"a": "2024-12-01 17:45:00", "b": 3238.4}, {"a": "2024-12-01 17:50:00", "b": 3414.6}, {"a": "2024-12-01 17:55:00", "b": 3848.2}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    