
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-11-07 15:50:00", "b": 522.0}, {"a": "2024-11-07 15:55:00", "b": 527.25}, {"a": "2024-11-07 16:00:00", "b": 528.3333333333334}, {"a": "2024-11-07 16:05:00", "b": 526.0}, {"a": "2024-11-07 16:10:00", "b": 530.0}, {"a": "2024-11-07 16:15:00", "b": 531.2}, {"a": "2024-11-07 16:20:00", "b": 538.5}, {"a": "2024-11-07 16:25:00", "b": 549.6}, {"a": "2024-11-07 16:30:00", "b": 551.4}, {"a": "2024-11-07 16:35:00", "b": 562.2}, {"a": "2024-11-07 16:40:00", "b": 590.5}, {"a": "2024-11-07 16:45:00", "b": 569.4}, {"a": "2024-11-07 16:50:00", "b": 565.6}, {"a": "2024-11-07 16:55:00", "b": 606.2}, {"a": "2024-11-07 17:00:00", "b": 633.25}, {"a": "2024-11-07 17:05:00", "b": 605.4}, {"a": "2024-11-07 17:10:00", "b": 606.25}, {"a": "2024-11-07 17:15:00", "b": 625.25}, {"a": "2024-11-07 17:20:00", "b": 648.4}, {"a": "2024-11-07 17:25:00", "b": 634.0}, {"a": "2024-11-07 17:30:00", "b": 617.8}, {"a": "2024-11-07 17:35:00", "b": 616.6}, {"a": "2024-11-07 17:40:00", "b": 632.25}, {"a": "2024-11-07 17:45:00", "b": 665.4}, {"a": "2024-11-07 17:50:00", "b": 742.8}, {"a": "2024-11-07 17:55:00", "b": 729.6}, {"a": "2024-11-07 18:00:00", "b": 704.0}, {"a": "2024-11-07 18:05:00", "b": 717.8}, {"a": "2024-11-07 18:10:00", "b": 706.6}, {"a": "2024-11-07 18:15:00", "b": 722.4}, {"a": "2024-11-07 18:20:00", "b": 761.25}, {"a": "2024-11-07 18:25:00", "b": 760.8}, {"a": "2024-11-07 18:30:00", "b": 740.6}, {"a": "2024-11-07 18:35:00", "b": 730.8}, {"a": "2024-11-07 18:40:00", "b": 742.5}, {"a": "2024-11-07 18:45:00", "b": 733.75}, {"a": "2024-11-07 18:50:00", "b": 773.2}, {"a": "2024-11-07 18:55:00", "b": 806.6}, {"a": "2024-11-07 19:00:00", "b": 728.5}, {"a": "2024-11-07 19:05:00", "b": 712.0}, {"a": "2024-11-07 19:10:00", "b": 685.0}, {"a": "2024-11-07 19:15:00", "b": 692.2}, {"a": "2024-11-07 19:20:00", "b": 700.5}, {"a": "2024-11-07 19:25:00", "b": 710.0}, {"a": "2024-11-07 19:30:00", "b": 696.0}, {"a": "2024-11-07 19:35:00", "b": 694.0}, {"a": "2024-11-07 19:40:00", "b": 708.8}, {"a": "2024-11-07 19:45:00", "b": 715.0}, {"a": "2024-11-07 19:50:00", "b": 687.25}, {"a": "2024-11-07 19:55:00", "b": 702.4}, {"a": "2024-11-07 20:00:00", "b": 720.2}, {"a": "2024-11-07 20:05:00", "b": 711.0}, {"a": "2024-11-07 20:10:00", "b": 716.25}, {"a": "2024-11-07 20:15:00", "b": 713.0}, {"a": "2024-11-07 20:20:00", "b": 699.0}, {"a": "2024-11-07 20:25:00", "b": 688.5}, {"a": "2024-11-07 20:30:00", "b": 694.75}, {"a": "2024-11-07 20:35:00", "b": 693.8}, {"a": "2024-11-07 20:40:00", "b": 698.0}, {"a": "2024-11-07 20:45:00", "b": 687.0}, {"a": "2024-11-07 20:50:00", "b": 681.0}, {"a": "2024-11-07 20:55:00", "b": 690.0}, {"a": "2024-11-07 21:00:00", "b": 670.75}, {"a": "2024-11-07 21:05:00", "b": 681.5}, {"a": "2024-11-07 21:10:00", "b": 687.0}, {"a": "2024-11-07 21:15:00", "b": 698.8}, {"a": "2024-11-07 21:20:00", "b": 695.25}, {"a": "2024-11-07 21:25:00", "b": 675.0}, {"a": "2024-11-07 21:30:00", "b": 687.8}, {"a": "2024-11-07 21:35:00", "b": 667.25}, {"a": "2024-11-07 21:40:00", "b": 671.2}, {"a": "2024-11-07 21:45:00", "b": 686.0}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    