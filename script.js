
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-01-24 22:00:00", "b": 676.4}, {"a": "2025-01-24 22:05:00", "b": 683.75}, {"a": "2025-01-24 22:10:00", "b": 659.2}, {"a": "2025-01-24 22:15:00", "b": 656.8}, {"a": "2025-01-24 22:20:00", "b": 657.6}, {"a": "2025-01-24 22:25:00", "b": 645.0}, {"a": "2025-01-24 22:30:00", "b": 643.75}, {"a": "2025-01-24 22:35:00", "b": 662.0}, {"a": "2025-01-24 22:40:00", "b": 657.75}, {"a": "2025-01-24 22:45:00", "b": 655.3333333333334}, {"a": "2025-01-24 22:50:00", "b": 660.0}, {"a": "2025-01-24 22:55:00", "b": 643.25}, {"a": "2025-01-24 23:00:00", "b": 635.4}, {"a": "2025-01-24 23:05:00", "b": 629.0}, {"a": "2025-01-24 23:10:00", "b": 648.6}, {"a": "2025-01-24 23:15:00", "b": 656.0}, {"a": "2025-01-24 23:20:00", "b": 643.5}, {"a": "2025-01-24 23:25:00", "b": 643.0}, {"a": "2025-01-24 23:30:00", "b": 651.25}, {"a": "2025-01-24 23:35:00", "b": 642.2}, {"a": "2025-01-24 23:40:00", "b": 624.4}, {"a": "2025-01-24 23:45:00", "b": 627.8}, {"a": "2025-01-24 23:50:00", "b": 624.2}, {"a": "2025-01-24 23:55:00", "b": 623.6}, {"a": "2025-01-25 00:00:00", "b": 640.6}, {"a": "2025-01-25 00:05:00", "b": 663.6}, {"a": "2025-01-25 00:10:00", "b": 675.0}, {"a": "2025-01-25 00:15:00", "b": 648.6}, {"a": "2025-01-25 00:20:00", "b": 621.2}, {"a": "2025-01-25 00:25:00", "b": 625.4}, {"a": "2025-01-25 00:30:00", "b": 626.6}, {"a": "2025-01-25 00:35:00", "b": 634.5}, {"a": "2025-01-25 00:40:00", "b": 616.6}, {"a": "2025-01-25 00:45:00", "b": 613.5}, {"a": "2025-01-25 00:50:00", "b": 618.8}, {"a": "2025-01-25 00:55:00", "b": 624.8}, {"a": "2025-01-25 01:00:00", "b": 613.75}, {"a": "2025-01-25 01:05:00", "b": 610.75}, {"a": "2025-01-25 01:10:00", "b": 634.2}, {"a": "2025-01-25 01:15:00", "b": 628.8}, {"a": "2025-01-25 01:20:00", "b": 617.4}, {"a": "2025-01-25 01:25:00", "b": 629.5}, {"a": "2025-01-25 01:30:00", "b": 639.3333333333334}, {"a": "2025-01-25 01:35:00", "b": 630.6}, {"a": "2025-01-25 01:40:00", "b": 622.0}, {"a": "2025-01-25 01:45:00", "b": 618.0}, {"a": "2025-01-25 01:50:00", "b": 628.2}, {"a": "2025-01-25 01:55:00", "b": 644.75}, {"a": "2025-01-25 02:00:00", "b": 644.8}, {"a": "2025-01-25 02:05:00", "b": 641.2}, {"a": "2025-01-25 02:10:00", "b": 628.25}, {"a": "2025-01-25 02:15:00", "b": 594.8}, {"a": "2025-01-25 02:20:00", "b": 597.6}, {"a": "2025-01-25 02:25:00", "b": 609.4}, {"a": "2025-01-25 02:30:00", "b": 612.5}, {"a": "2025-01-25 02:35:00", "b": 616.6}, {"a": "2025-01-25 02:40:00", "b": 600.0}, {"a": "2025-01-25 02:45:00", "b": 597.6}, {"a": "2025-01-25 02:50:00", "b": 593.0}, {"a": "2025-01-25 02:55:00", "b": 581.8}, {"a": "2025-01-25 03:00:00", "b": 585.5}, {"a": "2025-01-25 03:05:00", "b": 585.5}, {"a": "2025-01-25 03:10:00", "b": 585.0}, {"a": "2025-01-25 03:15:00", "b": 577.8}, {"a": "2025-01-25 03:20:00", "b": 566.0}, {"a": "2025-01-25 03:25:00", "b": 544.6}, {"a": "2025-01-25 03:30:00", "b": 528.6}, {"a": "2025-01-25 03:35:00", "b": 545.6}, {"a": "2025-01-25 03:40:00", "b": 559.8}, {"a": "2025-01-25 03:45:00", "b": 561.8}, {"a": "2025-01-25 03:50:00", "b": 558.25}, {"a": "2025-01-25 03:55:00", "b": 557.6666666666666}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    