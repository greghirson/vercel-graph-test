
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-11-07 13:10:00", "b": 539.5}, {"a": "2024-11-07 13:15:00", "b": 541.0}, {"a": "2024-11-07 13:20:00", "b": 532.6}, {"a": "2024-11-07 13:25:00", "b": 540.2}, {"a": "2024-11-07 13:30:00", "b": 549.0}, {"a": "2024-11-07 13:35:00", "b": 544.0}, {"a": "2024-11-07 13:40:00", "b": 543.3333333333334}, {"a": "2024-11-07 13:45:00", "b": 543.8}, {"a": "2024-11-07 13:50:00", "b": 547.5}, {"a": "2024-11-07 13:55:00", "b": 540.25}, {"a": "2024-11-07 14:00:00", "b": 539.0}, {"a": "2024-11-07 14:05:00", "b": 523.6}, {"a": "2024-11-07 14:10:00", "b": 528.75}, {"a": "2024-11-07 14:15:00", "b": 530.25}, {"a": "2024-11-07 14:20:00", "b": 530.4}, {"a": "2024-11-07 14:25:00", "b": 530.5}, {"a": "2024-11-07 14:30:00", "b": 535.0}, {"a": "2024-11-07 14:35:00", "b": 533.3333333333334}, {"a": "2024-11-07 14:40:00", "b": 530.6666666666666}, {"a": "2024-11-07 14:45:00", "b": 526.4}, {"a": "2024-11-07 14:50:00", "b": 523.5}, {"a": "2024-11-07 14:55:00", "b": 530.2}, {"a": "2024-11-07 15:00:00", "b": 524.2}, {"a": "2024-11-07 15:05:00", "b": 523.8}, {"a": "2024-11-07 15:10:00", "b": 520.25}, {"a": "2024-11-07 15:15:00", "b": 520.75}, {"a": "2024-11-07 15:20:00", "b": 517.6}, {"a": "2024-11-07 15:25:00", "b": 526.8}, {"a": "2024-11-07 15:30:00", "b": 541.4}, {"a": "2024-11-07 15:35:00", "b": 547.4}, {"a": "2024-11-07 15:40:00", "b": 538.2}, {"a": "2024-11-07 15:45:00", "b": 532.8}, {"a": "2024-11-07 15:50:00", "b": 522.0}, {"a": "2024-11-07 15:55:00", "b": 527.25}, {"a": "2024-11-07 16:00:00", "b": 528.3333333333334}, {"a": "2024-11-07 16:05:00", "b": 526.0}, {"a": "2024-11-07 16:10:00", "b": 530.0}, {"a": "2024-11-07 16:15:00", "b": 531.2}, {"a": "2024-11-07 16:20:00", "b": 538.5}, {"a": "2024-11-07 16:25:00", "b": 549.6}, {"a": "2024-11-07 16:30:00", "b": 551.4}, {"a": "2024-11-07 16:35:00", "b": 562.2}, {"a": "2024-11-07 16:40:00", "b": 590.5}, {"a": "2024-11-07 16:45:00", "b": 569.4}, {"a": "2024-11-07 16:50:00", "b": 565.6}, {"a": "2024-11-07 16:55:00", "b": 606.2}, {"a": "2024-11-07 17:00:00", "b": 633.25}, {"a": "2024-11-07 17:05:00", "b": 605.4}, {"a": "2024-11-07 17:10:00", "b": 606.25}, {"a": "2024-11-07 17:15:00", "b": 625.25}, {"a": "2024-11-07 17:20:00", "b": 648.4}, {"a": "2024-11-07 17:25:00", "b": 634.0}, {"a": "2024-11-07 17:30:00", "b": 617.8}, {"a": "2024-11-07 17:35:00", "b": 616.6}, {"a": "2024-11-07 17:40:00", "b": 632.25}, {"a": "2024-11-07 17:45:00", "b": 665.4}, {"a": "2024-11-07 17:50:00", "b": 742.8}, {"a": "2024-11-07 17:55:00", "b": 729.6}, {"a": "2024-11-07 18:00:00", "b": 704.0}, {"a": "2024-11-07 18:05:00", "b": 717.8}, {"a": "2024-11-07 18:10:00", "b": 706.6}, {"a": "2024-11-07 18:15:00", "b": 722.4}, {"a": "2024-11-07 18:20:00", "b": 761.25}, {"a": "2024-11-07 18:25:00", "b": 760.8}, {"a": "2024-11-07 18:30:00", "b": 740.6}, {"a": "2024-11-07 18:35:00", "b": 730.8}, {"a": "2024-11-07 18:40:00", "b": 742.5}, {"a": "2024-11-07 18:45:00", "b": 733.75}, {"a": "2024-11-07 18:50:00", "b": 773.2}, {"a": "2024-11-07 18:55:00", "b": 806.6}, {"a": "2024-11-07 19:00:00", "b": 728.5}, {"a": "2024-11-07 19:05:00", "b": 712.0}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    