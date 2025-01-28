
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-01-28 07:00:00", "b": 578.25}, {"a": "2025-01-28 07:05:00", "b": 595.4}, {"a": "2025-01-28 07:10:00", "b": 599.0}, {"a": "2025-01-28 07:15:00", "b": 592.3333333333334}, {"a": "2025-01-28 07:20:00", "b": 590.0}, {"a": "2025-01-28 07:25:00", "b": 597.4}, {"a": "2025-01-28 07:30:00", "b": 604.0}, {"a": "2025-01-28 07:35:00", "b": 603.6}, {"a": "2025-01-28 07:40:00", "b": 598.75}, {"a": "2025-01-28 07:45:00", "b": 619.0}, {"a": "2025-01-28 07:50:00", "b": 640.8}, {"a": "2025-01-28 07:55:00", "b": 650.0}, {"a": "2025-01-28 08:00:00", "b": 659.75}, {"a": "2025-01-28 08:05:00", "b": 661.0}, {"a": "2025-01-28 08:10:00", "b": 677.25}, {"a": "2025-01-28 08:15:00", "b": 670.0}, {"a": "2025-01-28 08:20:00", "b": 670.0}, {"a": "2025-01-28 08:25:00", "b": 682.8}, {"a": "2025-01-28 08:30:00", "b": 684.6666666666666}, {"a": "2025-01-28 08:35:00", "b": 663.2}, {"a": "2025-01-28 08:40:00", "b": 652.4}, {"a": "2025-01-28 08:45:00", "b": 660.4}, {"a": "2025-01-28 08:50:00", "b": 664.0}, {"a": "2025-01-28 08:55:00", "b": 657.6}, {"a": "2025-01-28 09:00:00", "b": 665.6}, {"a": "2025-01-28 09:05:00", "b": 674.6}, {"a": "2025-01-28 09:10:00", "b": 667.0}, {"a": "2025-01-28 09:15:00", "b": 683.2}, {"a": "2025-01-28 09:20:00", "b": 696.8}, {"a": "2025-01-28 09:25:00", "b": 687.5}, {"a": "2025-01-28 09:30:00", "b": 677.6}, {"a": "2025-01-28 09:35:00", "b": 688.0}, {"a": "2025-01-28 09:40:00", "b": 715.6}, {"a": "2025-01-28 09:45:00", "b": 724.3333333333334}, {"a": "2025-01-28 09:50:00", "b": 721.0}, {"a": "2025-01-28 09:55:00", "b": 726.2}, {"a": "2025-01-28 10:00:00", "b": 728.3333333333334}, {"a": "2025-01-28 10:05:00", "b": 734.0}, {"a": "2025-01-28 10:10:00", "b": 734.75}, {"a": "2025-01-28 10:15:00", "b": 725.2}, {"a": "2025-01-28 10:20:00", "b": 720.2}, {"a": "2025-01-28 10:25:00", "b": 724.5}, {"a": "2025-01-28 10:30:00", "b": 718.75}, {"a": "2025-01-28 10:35:00", "b": 719.6}, {"a": "2025-01-28 10:40:00", "b": 714.25}, {"a": "2025-01-28 10:45:00", "b": 709.75}, {"a": "2025-01-28 10:50:00", "b": 699.6}, {"a": "2025-01-28 10:55:00", "b": 676.2}, {"a": "2025-01-28 11:00:00", "b": 668.3333333333334}, {"a": "2025-01-28 11:05:00", "b": 662.0}, {"a": "2025-01-28 11:10:00", "b": 657.0}, {"a": "2025-01-28 11:15:00", "b": 634.6}, {"a": "2025-01-28 11:20:00", "b": 628.6}, {"a": "2025-01-28 11:25:00", "b": 629.5}, {"a": "2025-01-28 11:30:00", "b": 617.75}, {"a": "2025-01-28 11:35:00", "b": 607.0}, {"a": "2025-01-28 11:40:00", "b": 609.6}, {"a": "2025-01-28 11:45:00", "b": 611.2}, {"a": "2025-01-28 11:50:00", "b": 600.75}, {"a": "2025-01-28 11:55:00", "b": 612.2}, {"a": "2025-01-28 12:00:00", "b": 607.2}, {"a": "2025-01-28 12:05:00", "b": 597.5}, {"a": "2025-01-28 12:10:00", "b": 595.25}, {"a": "2025-01-28 12:15:00", "b": 581.0}, {"a": "2025-01-28 12:20:00", "b": 572.6}, {"a": "2025-01-28 12:25:00", "b": 569.0}, {"a": "2025-01-28 12:30:00", "b": 564.0}, {"a": "2025-01-28 12:35:00", "b": 555.4}, {"a": "2025-01-28 12:40:00", "b": 563.2}, {"a": "2025-01-28 12:45:00", "b": 562.6}, {"a": "2025-01-28 12:50:00", "b": 548.8}, {"a": "2025-01-28 12:55:00", "b": 532.0}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    