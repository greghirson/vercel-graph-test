
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-03-09 16:00:00", "b": 756.8}, {"a": "2025-03-09 16:05:00", "b": 749.0}, {"a": "2025-03-09 16:10:00", "b": 753.25}, {"a": "2025-03-09 16:15:00", "b": 748.8}, {"a": "2025-03-09 16:20:00", "b": 751.6}, {"a": "2025-03-09 16:25:00", "b": 755.8}, {"a": "2025-03-09 16:30:00", "b": 755.8}, {"a": "2025-03-09 16:35:00", "b": 769.4}, {"a": "2025-03-09 16:40:00", "b": 759.5}, {"a": "2025-03-09 16:45:00", "b": 768.4}, {"a": "2025-03-09 16:50:00", "b": 757.4}, {"a": "2025-03-09 16:55:00", "b": 753.25}, {"a": "2025-03-09 17:00:00", "b": 753.0}, {"a": "2025-03-09 17:05:00", "b": 749.8}, {"a": "2025-03-09 17:10:00", "b": 755.4}, {"a": "2025-03-09 17:15:00", "b": 745.25}, {"a": "2025-03-09 17:20:00", "b": 734.4}, {"a": "2025-03-09 17:25:00", "b": 718.2}, {"a": "2025-03-09 17:30:00", "b": 721.2}, {"a": "2025-03-09 17:35:00", "b": 728.0}, {"a": "2025-03-09 17:40:00", "b": 736.2}, {"a": "2025-03-09 17:45:00", "b": 745.8}, {"a": "2025-03-09 17:50:00", "b": 749.25}, {"a": "2025-03-09 17:55:00", "b": 763.0}, {"a": "2025-03-09 18:00:00", "b": 769.25}, {"a": "2025-03-09 18:05:00", "b": 764.6}, {"a": "2025-03-09 18:10:00", "b": 755.4}, {"a": "2025-03-09 18:15:00", "b": 758.75}, {"a": "2025-03-09 18:20:00", "b": 772.5}, {"a": "2025-03-09 18:25:00", "b": 794.0}, {"a": "2025-03-09 18:30:00", "b": 789.8}, {"a": "2025-03-09 18:35:00", "b": 774.8}, {"a": "2025-03-09 18:40:00", "b": 777.0}, {"a": "2025-03-09 18:45:00", "b": 777.2}, {"a": "2025-03-09 18:50:00", "b": 757.0}, {"a": "2025-03-09 18:55:00", "b": 749.6666666666666}, {"a": "2025-03-09 19:00:00", "b": 750.25}, {"a": "2025-03-09 19:05:00", "b": 734.0}, {"a": "2025-03-09 19:10:00", "b": 711.25}, {"a": "2025-03-09 19:15:00", "b": 712.6}, {"a": "2025-03-09 19:20:00", "b": 723.5}, {"a": "2025-03-09 19:25:00", "b": 733.6}, {"a": "2025-03-09 19:30:00", "b": 737.75}, {"a": "2025-03-09 19:35:00", "b": 758.0}, {"a": "2025-03-09 19:40:00", "b": 767.25}, {"a": "2025-03-09 19:45:00", "b": 750.6}, {"a": "2025-03-09 19:50:00", "b": 740.4}, {"a": "2025-03-09 19:55:00", "b": 724.0}, {"a": "2025-03-09 20:00:00", "b": 739.0}, {"a": "2025-03-09 20:05:00", "b": 752.2}, {"a": "2025-03-09 20:10:00", "b": 747.0}, {"a": "2025-03-09 20:15:00", "b": 760.2}, {"a": "2025-03-09 20:20:00", "b": 782.8}, {"a": "2025-03-09 20:25:00", "b": 789.6}, {"a": "2025-03-09 20:30:00", "b": 783.5}, {"a": "2025-03-09 20:35:00", "b": 750.8}, {"a": "2025-03-09 20:40:00", "b": 710.4}, {"a": "2025-03-09 20:45:00", "b": 691.6}, {"a": "2025-03-09 20:50:00", "b": 682.6666666666666}, {"a": "2025-03-09 20:55:00", "b": 678.0}, {"a": "2025-03-09 21:00:00", "b": 702.6}, {"a": "2025-03-09 21:05:00", "b": 727.6}, {"a": "2025-03-09 21:10:00", "b": 733.4}, {"a": "2025-03-09 21:15:00", "b": 698.6}, {"a": "2025-03-09 21:20:00", "b": 660.6}, {"a": "2025-03-09 21:25:00", "b": 681.8}, {"a": "2025-03-09 21:30:00", "b": 672.2}, {"a": "2025-03-09 21:35:00", "b": 676.8}, {"a": "2025-03-09 21:40:00", "b": 668.6}, {"a": "2025-03-09 21:45:00", "b": 645.4}, {"a": "2025-03-09 21:50:00", "b": 651.25}, {"a": "2025-03-09 21:55:00", "b": 656.6}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    